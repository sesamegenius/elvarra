#!/bin/bash

echo "╔════════════════════════════════════════════════════════╗"
echo "║     🚀 INITIALISATION DU PROJET KLIMROD 🚀            ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Étape 1 : Vérifier et créer .env
echo "📋 Étape 1/5 : Configuration de l'environnement"
if [ ! -f ".env" ]; then
    if [ -f "env.txt" ]; then
        cp env.txt .env
        echo -e "${GREEN}✅ Fichier .env créé depuis env.txt${NC}"
    else
        echo -e "${RED}❌ Erreur : Le fichier env.txt n'existe pas${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}⚠️  Le fichier .env existe déjà (non modifié)${NC}"
fi
echo ""

# Étape 2 : Installation des dépendances
echo "📦 Étape 2/5 : Installation des dépendances"
if [ ! -d "node_modules" ]; then
    npm install
    echo -e "${GREEN}✅ Dépendances installées${NC}"
else
    echo -e "${YELLOW}⚠️  Les dépendances sont déjà installées${NC}"
fi
echo ""

# Étape 3 : Génération du client Prisma
echo "🔧 Étape 3/5 : Génération du client Prisma"
npx prisma generate
echo -e "${GREEN}✅ Client Prisma généré${NC}"
echo ""

# Étape 4 : Configuration de la base de données
echo "🗄️  Étape 4/5 : Configuration de la base de données"
npx prisma db push
echo -e "${GREEN}✅ Base de données configurée${NC}"
echo ""

# Étape 5 : Création d'un admin
echo "👤 Étape 5/5 : Création d'un compte administrateur"
echo -e "${YELLOW}ℹ️  Création du compte admin avec les identifiants prédéfinis${NC}"
echo ""
npm run create-admin
echo ""

# Récapitulatif
echo "╔════════════════════════════════════════════════════════╗"
echo "║              ✨ CONFIGURATION TERMINÉE ✨              ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "🎉 Votre application est prête à être utilisée !"
echo ""
echo "Pour lancer l'application :"
echo "  ${GREEN}npm run dev${NC}"
echo ""
echo "Puis accédez à :"
echo "  🌐 Application : ${GREEN}http://localhost:3000${NC}"
echo "  🔐 Admin       : ${GREEN}http://localhost:3000/admin${NC}"
echo ""

