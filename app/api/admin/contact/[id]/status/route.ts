import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, ContactStatus } from "@prisma/client";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

const VALID_STATUSES = Object.values(ContactStatus);

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const token = request.cookies.get("admin-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 });
    }

    const { status } = await request.json();
    const { id } = await params;

    // Valider le statut contre l'enum Prisma
    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: "Statut invalide" },
        { status: 400 }
      );
    }

    // Mettre à jour le statut
    const updatedContact = await prisma.contactQuery.update({
      where: { id },
      data: { status: status as ContactStatus },
    });

    return NextResponse.json(updatedContact);

  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}