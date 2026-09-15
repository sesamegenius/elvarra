import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Token manquant" },
        { status: 401 }
      );
    }

    const user = verifyToken(token);
    
    if (!user) {
      return NextResponse.json(
        { error: "Token invalide" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });

  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
