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
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Réponse à votre demande - ELVARRA</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #EEF4F1;
  font-family: Arial, Helvetica, sans-serif;
  color: #3A4657;
">

  <!-- Wrapper principal -->
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background-color: #EEF4F1; margin: 0; padding: 32px 16px;"
  >
    <tr>
      <td align="center">

        <!-- Container -->
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            max-width: 640px;
            background-color: #ffffff;
            border-radius: 20px;
            overflow: hidden;
          "
        >

          <!-- HEADER -->
          <tr>
            <td
              style="
                background-color: #14213D;
                padding: 28px 36px;
              "
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td>
                    <div style="
                      font-size: 24px;
                      line-height: 1;
                      font-weight: 700;
                      letter-spacing: 1px;
                      color: #ffffff;
                    ">
                      ELVARRA
                    </div>

                    <div style="
                      margin-top: 8px;
                      font-size: 11px;
                      line-height: 1.4;
                      letter-spacing: 1.8px;
                      text-transform: uppercase;
                      color: #A9B4C4;
                    ">
                      Expert d'assuré
                    </div>
                  </td>

                  <td align="right" valign="middle">
                    <div style="
                      width: 42px;
                      height: 42px;
                      line-height: 42px;
                      text-align: center;
                      border-radius: 12px;
                      background-color: rgba(255,255,255,0.08);
                      color: #BFD3E8;
                      font-size: 18px;
                      font-weight: 700;
                    ">
                      E
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ACCENT -->
          <tr>
            <td style="height: 4px; background-color: #5B90D6; font-size: 0; line-height: 0;">
              &nbsp;
            </td>
          </tr>

          <!-- INTRO -->
          <tr>
            <td style="padding: 40px 36px 24px 36px;">

              <div style="
                font-size: 11px;
                line-height: 1.4;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #1F6F63;
                margin-bottom: 12px;
              ">
                Réponse à votre demande
              </div>

              <h1 style="
                margin: 0;
                color: #14213D;
                font-size: 30px;
                line-height: 1.2;
                font-weight: 700;
              ">
                Bonjour ${contact.fullName},
              </h1>

              <p style="
                margin: 18px 0 0 0;
                color: #4A5568;
                font-size: 15px;
                line-height: 1.7;
              ">
                Merci pour votre message et pour la confiance accordée à
                <strong style="color: #14213D;">ELVARRA</strong>.
              </p>

            </td>
          </tr>

          <!-- OBJET DE LA DEMANDE -->
          <tr>
            <td style="padding: 0 36px 28px 36px;">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #F4F7FA;
                  border: 1px solid #E1E7ED;
                  border-radius: 14px;
                "
              >
                <tr>
                  <td style="padding: 18px 20px;">

                    <div style="
                      font-size: 10px;
                      line-height: 1.4;
                      font-weight: 700;
                      letter-spacing: 1.3px;
                      text-transform: uppercase;
                      color: #5B6B82;
                      margin-bottom: 7px;
                    ">
                      Votre demande
                    </div>

                    <div style="
                      font-size: 15px;
                      line-height: 1.5;
                      font-weight: 600;
                      color: #14213D;
                    ">
                      ${objetLabel}
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- REPONSE -->
          <tr>
            <td style="padding: 0 36px 36px 36px;">

              <div style="
                font-size: 11px;
                line-height: 1.4;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #5B90D6;
                margin-bottom: 12px;
              ">
                Notre réponse
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #ffffff;
                  border: 1px solid #E1E7ED;
                  border-radius: 14px;
                "
              >
                <tr>
                  <td style="padding: 24px;">

                    <div style="
                      color: #3A4657;
                      font-size: 15px;
                      line-height: 1.75;
                      white-space: pre-wrap;
                    ">
                      ${content}
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- SIGNATURE / CTA -->
          <tr>
            <td style="padding: 0 36px 40px 36px;">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #14213D;
                  border-radius: 16px;
                "
              >
                <tr>
                  <td style="padding: 24px 26px;">

                    <div style="
                      color: #ffffff;
                      font-size: 16px;
                      line-height: 1.5;
                      font-weight: 700;
                    ">
                      L'équipe ELVARRA
                    </div>

                    <div style="
                      margin-top: 8px;
                      color: #A9B4C4;
                      font-size: 13px;
                      line-height: 1.6;
                    ">
                      Nous restons à votre disposition pour toute
                      question complémentaire concernant votre dossier.
                    </div>

                    <div style="
                      margin-top: 18px;
                      width: 40px;
                      height: 3px;
                      background-color: #D9A44E;
                      border-radius: 3px;
                    ">
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                padding: 24px 36px 30px 36px;
                background-color: #F4F6F5;
                border-top: 1px solid #E5E9E7;
              "
            >

              <div style="
                color: #14213D;
                font-size: 13px;
                line-height: 1.5;
                font-weight: 700;
              ">
                ELVARRA
              </div>

              <div style="
                margin-top: 5px;
                color: #6B7788;
                font-size: 11px;
                line-height: 1.6;
              ">
                Expert d'assuré
              </div>

              <div style="
                margin-top: 14px;
                color: #8A94A3;
                font-size: 10px;
                line-height: 1.6;
              ">
                Ce message vous est adressé dans le cadre de votre
                demande auprès d'ELVARRA.
              </div>

            </td>
          </tr>

        </table>

        <!-- Mentions sous le container -->
        <div style="
          max-width: 600px;
          padding: 18px 20px 0 20px;
          color: #7B8794;
          font-size: 10px;
          line-height: 1.5;
          text-align: center;
        ">
          © ELVARRA — Tous droits réservés
        </div>

      </td>
    </tr>
  </table>

</body>
</html>
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