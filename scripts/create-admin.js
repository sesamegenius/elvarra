/**
 * create-admin.js
 *
 * Crée un compte administrateur directement en base (via Prisma / MongoDB).
 *
 * Prérequis :
 *   npm install bcryptjs
 *   (Prisma Client doit déjà être généré : `npx prisma generate`)
 *
 * ⚠️ Important : ce script hache le mot de passe avec bcryptjs. Vérifiez que
 * votre route /api/auth/login compare bien le mot de passe avec
 * bcrypt.compare(...) (bcrypt ou bcryptjs, les deux produisent des hash
 * compatibles). Si votre API utilise une autre méthode de hachage, adaptez
 * la fonction hashPassword() ci-dessous en conséquence.
 *
 * Utilisation :
 *
 *   # 1. Avec des arguments en ligne de commande
 *   node scripts/create-admin.js --username=admin --email=admin@elvarra.fr --password=MotDePasseFort123
 *
 *   # 2. En mode interactif (le script vous posera les questions)
 *   node scripts/create-admin.js
 *
 *   # 3. Mettre à jour le mot de passe d'un admin existant
 *   node scripts/create-admin.js --username=admin --password=NouveauMotDePasse --update
 */

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const prisma = new PrismaClient();

const SALT_ROUNDS = 12;

function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    if (arg === "--update") {
      args.update = true;
      continue;
    }
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) {
      args[match[1]] = match[2];
    }
  }
  return args;
}

function ask(question, { hidden = false } = {}) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    if (!hidden) {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
      return;
    }

    // Saisie masquée pour le mot de passe
    const stdin = process.stdin;
    process.stdout.write(question);
    let input = "";

    const onData = (char) => {
      char = char.toString("utf8");
      if (char === "\n" || char === "\r" || char === "\u0004") {
        stdin.removeListener("data", onData);
        stdin.setRawMode && stdin.setRawMode(false);
        stdin.pause();
        process.stdout.write("\n");
        rl.close();
        resolve(input.trim());
      } else if (char === "\u0003") {
        process.exit(1);
      } else if (char === "\u007f") {
        input = input.slice(0, -1);
      } else {
        input += char;
      }
    };

    stdin.setRawMode && stdin.setRawMode(true);
    stdin.resume();
    stdin.on("data", onData);
  });
}

async function hashPassword(plain) {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function main() {
  const args = parseArgs();

  let { username, email, password } = args;

  if (!username) {
    username = await ask("Nom d'utilisateur : ");
  }
  if (!username) {
    console.error("❌ Le nom d'utilisateur est obligatoire.");
    process.exit(1);
  }

  const existing = await prisma.admin.findUnique({ where: { username } });

  if (existing && !args.update) {
    console.error(
      `❌ Un admin avec le nom d'utilisateur "${username}" existe déjà. Utilisez --update pour changer son mot de passe/email.`
    );
    process.exit(1);
  }

  if (!existing && !email) {
    email = await ask("Email : ");
  }
  if (!existing && (!email || !isEmailValid(email))) {
    console.error("❌ Merci de fournir une adresse email valide.");
    process.exit(1);
  }

  if (!password) {
    password = await ask("Mot de passe : ", { hidden: true });
  }
  if (!password || password.length < 8) {
    console.error("❌ Le mot de passe doit contenir au moins 8 caractères.");
    process.exit(1);
  }

  const hashedPassword = await hashPassword(password);

  if (existing) {
    const updated = await prisma.admin.update({
      where: { username },
      data: {
        password: hashedPassword,
        ...(email ? { email } : {}),
      },
    });
    console.log(`✅ Mot de passe mis à jour pour l'admin "${updated.username}" (${updated.email}).`);
  } else {
    const emailTaken = await prisma.admin.findUnique({ where: { email } });
    if (emailTaken) {
      console.error(`❌ Un admin avec l'email "${email}" existe déjà.`);
      process.exit(1);
    }

    const created = await prisma.admin.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(`✅ Administrateur créé avec succès :`);
    console.log(`   • id       : ${created.id}`);
    console.log(`   • username : ${created.username}`);
    console.log(`   • email    : ${created.email}`);
  }
}

main()
  .catch((error) => {
    console.error("❌ Une erreur est survenue :", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });