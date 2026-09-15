export default function MentionsLegalesPage() {
  return (
    <div className="prose prose-lg max-w-none text-black">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Raison sociale :</strong> Sésame SASU</p>
            <p><strong>Forme juridique :</strong> Société par Actions Simplifiée</p>
            <p><strong>Capital social :</strong> [À compléter]</p>
            <p><strong>Siège social :</strong>47 Rue Marcel Dassault, 92100 Boulogne-Billancourt</p>
            <p><strong>SIRET :</strong> En cours d&apos;attributon</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directeur de la publication</h2>
          <p>Michaël D&apos;Avila</p>
          <p><strong>Email :</strong> hello@sesame-lab.fr</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
            <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-[#005493] hover:underline">vercel.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
            les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est 
            formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
            à différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
          </p>
          <p>
            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
            vouloir le signaler par email à l&apos;adresse <strong>contact@Sésame.com</strong>, en décrivant le 
            problème de la façon la plus précise possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres 
            ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Sésame.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
          <p>
            Le site peut être amené à vous demander l&apos;acceptation des cookies pour des besoins de 
            statistiques et d&apos;affichage. Un cookie est une information déposée sur votre disque dur 
            par le serveur du site que vous visitez.
          </p>
          <p>
            Vous pouvez vous opposer à l&apos;enregistrement de cookies en configurant votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Droit applicable</h2>
          <p>
            Le présent site et les conditions générales d&apos;utilisation sont régis par le droit français. 
            En cas de litige, les tribunaux français seront les seuls compétents.
          </p>
        </section>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
      </div>
    </div>
  );
}
