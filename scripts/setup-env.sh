#!/bin/bash

# Script pour configurer l'environnement

echo "🚀 Configuration de l'environnement..."

# Vérifier si env.txt existe
if [ ! -f "env.txt" ]; then
    echo "❌ Erreur : Le fichier env.txt n'existe pas"
    exit 1
fi

# Créer le fichier .env depuis env.txt
echo "📝 Création du fichier .env..."
cp env.txt .env

if [ $? -eq 0 ]; then
    echo "✅ Fichier .env créé avec succès"
else
    echo "❌ Erreur lors de la création du fichier .env"
    exit 1
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Générer le client Prisma
echo "🔧 Génération du client Prisma..."
npx prisma generate

# Pousser le schéma vers la base de données
echo "🗄️  Configuration de la base de données..."
npx prisma db push

echo ""
echo "✨ Configuration terminée !"
echo ""
echo "Prochaines étapes :"
echo "1. Créez un utilisateur administrateur : npm run create-admin"
echo "2. Lancez l'application : npm run dev"
echo "3. Accédez à l'admin sur : http://localhost:3000/admin"
echo ""

