export default function PrivacyPage() {
  return (
    <div className="prose prose-lg max-w-none text-black">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            Sésame SASU (ci-après &quot;Sésame&quot;, &quot;nous&quot;, &quot;notre&quot;) s&apos;engage à protéger la confidentialité et 
            la sécurité des données personnelles de ses utilisateurs. Cette politique de confidentialité 
            explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles.
          </p>
          <p>
            Cette politique s&apos;applique à tous les services proposés par Sésame, y compris notre site web 
            et la suite Sésame Genius.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données que nous collectons</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Données que vous nous fournissez</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Informations d&apos;identification : nom, prénom, adresse email, numéro de téléphone</li>
            <li>Informations professionnelles : entreprise, secteur d&apos;activité, fonction</li>
            <li>Informations de facturation : adresse de facturation, informations de paiement</li>
            <li>Contenus et communications : messages, commentaires, demandes de support</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Données collectées automatiquement</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Données de navigation : adresse IP, type de navigateur, pages visitées</li>
            <li>Données d&apos;utilisation : interactions avec nos services, préférences utilisateur</li>
            <li>Cookies et technologies similaires</li>
            <li>Données de géolocalisation (si autorisée)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Comment nous utilisons vos données</h2>
          <p>Nous utilisons vos données personnelles pour :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Fournir et améliorer nos services</li>
            <li>Traiter vos commandes et gérer votre compte</li>
            <li>Communiquer avec vous (support, notifications, marketing)</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Analyser l&apos;utilisation de nos services</li>
            <li>Respecter nos obligations légales</li>
            <li>Prévenir la fraude et assurer la sécurité</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale du traitement</h2>
          <p>Nous traitons vos données personnelles sur la base de :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Contrat :</strong> Pour fournir nos services et exécuter nos contrats</li>
            <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité</li>
            <li><strong>Consentement :</strong> Pour le marketing direct et certaines fonctionnalités</li>
            <li><strong>Obligation légale :</strong> Pour respecter nos obligations réglementaires</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Partage des données</h2>
          <p>
            Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations 
            uniquement dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Avec votre consentement explicite</li>
            <li>Avec nos prestataires de services (hébergement, paiement, analytics)</li>
            <li>Pour respecter une obligation légale ou une décision de justice</li>
            <li>Pour protéger nos droits et notre sécurité</li>
            <li>En cas de fusion, acquisition ou cession d&apos;actifs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
            vos données personnelles contre :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>L&apos;accès non autorisé</li>
            <li>La perte ou la destruction</li>
            <li>L&apos;utilisation abusive</li>
            <li>La divulgation non autorisée</li>
          </ul>
          <p className="mt-4">
            Ces mesures incluent le chiffrement, l&apos;authentification forte, les sauvegardes régulières 
            et la formation de notre personnel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Conservation des données</h2>
          <p>
            Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
            pour lesquelles elles ont été collectées :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Données de compte : pendant la durée de votre abonnement + 3 ans</li>
            <li>Données de facturation : 10 ans (obligation comptable)</li>
            <li>Données marketing : jusqu&apos;à votre désinscription</li>
            <li>Logs de connexion : 12 mois maximum</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-4">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit d&apos;effacement :</strong> supprimer vos données dans certains cas</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit de retirer votre consentement</strong></li>
            </ul>
          </div>

          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à : <strong>hello@sesame-lab.fr</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience. Nous utilisons :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
            <li><strong>Cookies d&apos;analyse :</strong> pour comprendre l&apos;utilisation du site</li>
            <li><strong>Cookies marketing :</strong> pour personnaliser la publicité (avec consentement)</li>
          </ul>
          <p className="mt-4">
            Vous pouvez gérer vos préférences cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Transferts internationaux</h2>
          <p>
            Vos données peuvent être transférées vers des pays hors de l&apos;Union Européenne uniquement 
            avec des garanties appropriées (clauses contractuelles types, décisions d&apos;adéquation).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications</h2>
          <p>
            Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications 
            importantes vous seront notifiées par email ou sur notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Responsable de la protection des données :</strong></p>
            <p>Email : hello@sesame-lab.fr</p>
            <p>Adresse : 47 Rue Marcel Dassault, 92100 Boulogne-Billancourt</p>
            <p className="mt-4">
              <strong>Autorité de contrôle :</strong> CNIL (Commission Nationale de l&apos;Informatique et des Libertés)
            </p>
            <p>Site web : <a href="https://www.cnil.fr" className="text-[#005493] hover:underline">www.cnil.fr</a></p>
          </div>
        </section>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        <p>Version 1.0</p>
      </div>
    </div>
  );
}
