const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    console.log("=".repeat(50));
    console.log("🔐 CRÉATION DU COMPTE ADMINISTRATEUR");
    console.log("=".repeat(50));
    console.log("");

    const username = "sesame";
    const email = "michael@sesame-lab.fr";
    const password = "!Sesame660";

    console.log("⏳ Vérification et création en cours...");
    console.log("");

    // Vérifier si l'admin existe déjà
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingAdmin) {
      console.log("⚠️  Un administrateur avec ce nom d'utilisateur ou cet email existe déjà.");
      console.log("");
      console.log("Informations existantes :");
      console.log(`   Username : ${existingAdmin.username}`);
      console.log(`   Email    : ${existingAdmin.email}`);
      console.log("");
      console.log("✅ Vous pouvez vous connecter avec ces identifiants.");
      await prisma.$disconnect();
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Créer l'admin
    await prisma.admin.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    console.log("=".repeat(50));
    console.log("✅ Administrateur créé avec succès !");
    console.log("=".repeat(50));
    console.log("");
    console.log("📋 Identifiants de connexion :");
    console.log(`   Username    : ${username}`);
    console.log(`   Email       : ${email}`);
    console.log(`   Mot de passe: ${password}`);
    console.log("");
    console.log("🌐 Connectez-vous sur :");
    console.log("   http://localhost:3000/admin/login");
    console.log("");
    console.log("⚠️  Gardez ces identifiants en sécurité !");
    console.log("");

  } catch (error) {
    console.error("❌ Erreur lors de la création de l'administrateur:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();

