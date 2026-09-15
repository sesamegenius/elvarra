import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin, generateToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Nom d'utilisateur et mot de passe requis" },
        { status: 400 }
      );
    }

    const admin = await authenticateAdmin(username, password);
    
    if (!admin) {
      return NextResponse.json(
        { error: "Identifiants invalides" },
        { status: 401 }
      );
    }

    const token = generateToken(admin);

    const response = NextResponse.json(
      { 
        message: "Connexion réussie",
        user: admin 
      },
      { status: 200 }
    );

    // Définir le cookie HTTP-only
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 jours
      path: "/",
    });

    return response;

  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
