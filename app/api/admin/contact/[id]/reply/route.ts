import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, ObjetDemande } from "@prisma/client";
import { verifyToken } from "@/lib/auth";
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

const OBJET_LABELS: Record<ObjetDemande, string> = {
  SINISTRE_RECENT: "Sinistre récent",
  EXPERTISE_PROGRAMMEE: "Expertise programmée",
  PROPOSITION_RECUE: "Proposition reçue",
  DESACCORD: "Désaccord",
  ELVARRA_GESTION: "ELVARRA Gestion",
  AUTRE: "Autre",
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get("admin-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 });
    }

    const { content } = await request.json();
    const { id } = await params;

    if (!content || !content.trim()) {
      return NextResponse.json(
        { error: "Le contenu de la réponse est requis" },
        { status: 400 }
      );
    }

    const contact = await prisma.contactQuery.findUnique({
      where: { id },
    });

    if (!contact) {
      return NextResponse.json(
        { error: "Demande de contact non trouvée" },
        { status: 404 }
      );
    }

    const objetLabel = OBJET_LABELS[contact.objet] || contact.objet;

    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_NAME}" <${process.env.CONTACT_EMAIL}>`,
        to: contact.email,
        subject: `Re: ${objetLabel}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14213D;">Réponse à votre demande</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>Bonjour ${contact.fullName},</p>
              <p>Merci pour votre message concernant : <strong>${objetLabel}</strong></p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Notre réponse</h3>
              <p style="white-space: pre-wrap;">${content}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
              <p style="margin: 0; color: #0369a1;">
                <strong>Équipe ELVARRA</strong><br>
                Si vous avez d'autres questions, n'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email de réponse:", emailError);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    const updatedContact = await prisma.contactQuery.update({
      where: { id },
      data: { status: "ANSWERED" },
    });

    return NextResponse.json({
      message: "Réponse envoyée avec succès",
      contact: updatedContact,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la réponse:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}