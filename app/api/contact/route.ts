import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, VousEtes, ObjetDemande, TypeSinistre, ExpertiseStatut, PropositionStatut } from "@prisma/client";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Valeurs attendues côté frontend (snake_case) -> validées puis mises en MAJUSCULES pour Prisma
const VOUS_ETES = ["particulier", "professionnel", "gestionnaire"] as const;
const OBJETS = [
  "sinistre_recent",
  "expertise_programmee",
  "proposition_recue",
  "desaccord",
  "elvarra_gestion",
  "autre",
] as const;
const TYPES_SINISTRE = [
  "incendie",
  "degat_des_eaux",
  "evenement_climatique",
  "autre",
  "non_applicable",
] as const;
const EXPERTISE_STATUTS = ["non", "programmee", "realisee", "ne_sait_pas"] as const;
const PROPOSITION_STATUTS = ["non", "oui", "ne_sait_pas"] as const;

const VOUS_ETES_LABELS: Record<string, string> = {
  particulier: "Particulier",
  professionnel: "Professionnel / entreprise",
  gestionnaire: "Gestionnaire immobilier",
};
const OBJET_LABELS: Record<string, string> = {
  sinistre_recent: "Sinistre récent",
  expertise_programmee: "Expertise programmée",
  proposition_recue: "Proposition reçue",
  desaccord: "Désaccord",
  elvarra_gestion: "ELVARRA Gestion",
  autre: "Autre",
};
const TYPE_SINISTRE_LABELS: Record<string, string> = {
  incendie: "Incendie",
  degat_des_eaux: "Dégât des eaux",
  evenement_climatique: "Événement climatique",
  autre: "Autre",
  non_applicable: "Non applicable",
};
const EXPERTISE_STATUT_LABELS: Record<string, string> = {
  non: "Non",
  programmee: "Programmée",
  realisee: "Déjà réalisée",
  ne_sait_pas: "Je ne sais pas",
};
const PROPOSITION_STATUT_LABELS: Record<string, string> = {
  non: "Non",
  oui: "Oui",
  ne_sait_pas: "Je ne sais pas",
};

function toEnumValue<T extends string>(value: string): T {
  return value.toUpperCase() as T;
}

function parseDate(value: unknown): Date | null {
  if (!value || typeof value !== "string") return null;
  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      vousEtes,
      objet,
      typeSinistre,
      dateSinistre,
      expertiseStatut,
      expertiseDate,
      propositionStatut,
      codePostal,
      fullName,
      company,
      phone,
      email,
      content,
      consentObligatoire,
      consentFacultatif,
    } = body;

    // Champs obligatoires
    if (
      !vousEtes ||
      !objet ||
      !codePostal ||
      !fullName ||
      !phone ||
      !email ||
      !content
    ) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    if (!consentObligatoire) {
      return NextResponse.json(
        { error: "Le consentement à la politique de confidentialité est obligatoire" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Validation des champs à choix
    if (!VOUS_ETES.includes(vousEtes)) {
      return NextResponse.json({ error: "Valeur invalide pour 'vousEtes'" }, { status: 400 });
    }
    if (!OBJETS.includes(objet)) {
      return NextResponse.json({ error: "Valeur invalide pour 'objet'" }, { status: 400 });
    }
    if (typeSinistre && !TYPES_SINISTRE.includes(typeSinistre)) {
      return NextResponse.json({ error: "Valeur invalide pour 'typeSinistre'" }, { status: 400 });
    }
    if (expertiseStatut && !EXPERTISE_STATUTS.includes(expertiseStatut)) {
      return NextResponse.json({ error: "Valeur invalide pour 'expertiseStatut'" }, { status: 400 });
    }
    if (propositionStatut && !PROPOSITION_STATUTS.includes(propositionStatut)) {
      return NextResponse.json({ error: "Valeur invalide pour 'propositionStatut'" }, { status: 400 });
    }

    // Sauvegarde en base de données
    const contactQuery = await prisma.contactQuery.create({
      data: {
        vousEtes: toEnumValue<VousEtes>(vousEtes),
        objet: toEnumValue<ObjetDemande>(objet),
        typeSinistre: typeSinistre ? toEnumValue<TypeSinistre>(typeSinistre) : undefined,
        dateSinistre: parseDate(dateSinistre) ?? undefined,
        expertiseStatut: expertiseStatut ? toEnumValue<ExpertiseStatut>(expertiseStatut) : undefined,
        expertiseDate: parseDate(expertiseDate) ?? undefined,
        propositionStatut: propositionStatut ? toEnumValue<PropositionStatut>(propositionStatut) : undefined,
        codePostal,
        fullName,
        company: company || null,
        phone,
        email,
        content,
        consentObligatoire: Boolean(consentObligatoire),
        consentFacultatif: Boolean(consentFacultatif),
      },
    });

    // Envoi de l'email de notification
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_NAME}" <${process.env.CONTACT_EMAIL}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `Nouvelle demande de contact - ${OBJET_LABELS[objet] || objet}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14213D;">Nouvelle demande de contact</h2>

            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Informations du contact</h3>
              <p><strong>Nom et prénom :</strong> ${fullName}</p>
              ${company ? `<p><strong>Société :</strong> ${company}</p>` : ""}
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Téléphone :</strong> ${phone}</p>
              <p><strong>Code postal du bien sinistré :</strong> ${codePostal}</p>
              <p><strong>Vous êtes :</strong> ${VOUS_ETES_LABELS[vousEtes] || vousEtes}</p>
            </div>

            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Détails de la demande</h3>
              <p><strong>Objet :</strong> ${OBJET_LABELS[objet] || objet}</p>
              ${typeSinistre ? `<p><strong>Type de sinistre :</strong> ${TYPE_SINISTRE_LABELS[typeSinistre] || typeSinistre}</p>` : ""}
              ${dateSinistre ? `<p><strong>Date du sinistre :</strong> ${dateSinistre}</p>` : ""}
              ${expertiseStatut ? `<p><strong>Expertise programmée/réalisée :</strong> ${EXPERTISE_STATUT_LABELS[expertiseStatut] || expertiseStatut}</p>` : ""}
              ${expertiseDate ? `<p><strong>Date d'expertise :</strong> ${expertiseDate}</p>` : ""}
              ${propositionStatut ? `<p><strong>Proposition d'indemnisation reçue :</strong> ${PROPOSITION_STATUT_LABELS[propositionStatut] || propositionStatut}</p>` : ""}
            </div>

            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Description de la situation</h3>
              <p style="white-space: pre-wrap;">${content}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
              <p style="margin: 0; color: #92400e;">
                <strong>ID de la demande :</strong> ${contactQuery.id}<br/>
                <strong>Consentement actualités :</strong> ${consentFacultatif ? "Oui" : "Non"}
              </p>
            </div>
          </div>
        `,
      };

      const result = await transporter.sendMail(mailOptions);
      console.log("Email envoyé avec succès:", result.messageId);
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError);
      // On continue même si l'email échoue, la demande est quand même sauvegardée
    }

    return NextResponse.json(
      {
        message: "Demande de contact envoyée avec succès",
        id: contactQuery.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de la création de la demande de contact:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}