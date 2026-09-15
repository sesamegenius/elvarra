import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import * as readline from "readline";

const prisma = new PrismaClient();

// Interface pour lire les entrées utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createAdmin() {
  try {
    console.log("=".repeat(50));
    console.log("🔐 CRÉATION D'UN COMPTE ADMINISTRATEUR");
    console.log("=".repeat(50));
    console.log("");

    // Demander les informations
    const username = await question("Nom d'utilisateur : ");
    if (!username || username.trim().length < 3) {
      console.log("❌ Le nom d'utilisateur doit contenir au moins 3 caractères.");
      rl.close();
      return;
    }

    const email = await question("Email : ");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Format d'email invalide.");
      rl.close();
      return;
    }

    const password = await question("Mot de passe : ");
    if (!password || password.length < 6) {
      console.log("❌ Le mot de passe doit contenir au moins 6 caractères.");
      rl.close();
      return;
    }

    const confirmPassword = await question("Confirmer le mot de passe : ");
    if (password !== confirmPassword) {
      console.log("❌ Les mots de passe ne correspondent pas.");
      rl.close();
      return;
    }

    console.log("");
    console.log("⏳ Vérification et création en cours...");
    console.log("");

    // Vérifier si l'admin existe déjà
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { username: username.trim() },
          { email: email.trim() }
        ]
      }
    });

    if (existingAdmin) {
      console.log("❌ Un administrateur avec ce nom d'utilisateur ou cet email existe déjà.");
      rl.close();
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Créer l'admin
    await prisma.admin.create({
      data: {
        username: username.trim(),
        email: email.trim(),
        password: hashedPassword,
      },
    });

    console.log("=".repeat(50));
    console.log("✅ Administrateur créé avec succès !");
    console.log("=".repeat(50));
    console.log("");
    console.log("📋 Vos identifiants de connexion :");
    console.log(`   Nom d'utilisateur : ${username.trim()}`);
    console.log(`   Email            : ${email.trim()}`);
    console.log("");
    console.log("🌐 Vous pouvez maintenant vous connecter sur :");
    console.log("   http://localhost:3000/admin/login");
    console.log("");
    console.log("⚠️  Gardez ces identifiants en sécurité !");
    console.log("");

  } catch (error) {
    console.error("❌ Erreur lors de la création de l'administrateur:", error);
  } finally {
    rl.close();
    await prisma.$disconnect();
  }
}

createAdmin();
