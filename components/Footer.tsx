import { IconPhone, IconMail, IconPin } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-white text-center lg:text-left">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[20px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
              Elvarra
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5B6B82] max-w-[220px] mx-auto lg:mx-none">
              Cabinet d&apos;expertise d'assuré. Analyse, documentation et défense de votre
              indemnisation après sinistre.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#14213D] mb-4">Navigation</p>
            <ul className="flex flex-col gap-3 text-[14px] text-[#5B6B82]">
              <li><a href="/" className="hover:text-[#14213D]">Accueil</a></li>
              <li><a href="/particuliers/" className="hover:text-[#14213D]">Particuliers</a></li>
              <li><a href="/professionnels/" className="hover:text-[#14213D]">Professionnels</a></li>
              <li><a href="/gestion-immobiliere/" className="hover:text-[#14213D]">ELVARRA Gestion</a></li>
              <li><a href="/sinistres/" className="hover:text-[#14213D]">Vos sinistres</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#14213D] mb-4">Ressources</p>
            <ul className="flex flex-col gap-3 text-[14px] text-[#5B6B82]">
              <li><a href="/expert-assure/" className="hover:text-[#14213D]">L'expert d'assuré</a></li>
              <li><a href="/que-faire-apres-un-sinistre/" className="hover:text-[#14213D]">Que faire après un sinistre ?</a></li>
              <li><a href="/notre-methode/" className="hover:text-[#14213D]">Notre méthode</a></li>
              <li><a href="/conseils/" className="hover:text-[#14213D]">Conseils</a></li>
              <li><a href="/faq/" className="hover:text-[#14213D]">FAQ</a></li>
            </ul>
          </div>
          <div className=''>
            <p className="text-[13px] font-medium text-[#14213D] mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-[14px] text-[#5B6B82]">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <IconPhone className="h-4 w-4 shrink-0" />
                <a href="tel:+33185099748" className="hover:text-[#14213D]">+33 (0)1 85 09 97 48</a>
              </li>
              <li className="flex justify-center lg:justify-start items-center gap-2">
                <IconMail className="h-4 w-4 shrink-0" />
                <a href="mailto:hello@elvarra.fr" className="hover:text-[#14213D]">hello@elvarra.fr</a>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <IconPin className="h-4 w-4 shrink-0 mt-0.5" />
                47 rue Marcel Dassault, 92100 Boulogne-Billancourt
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#E1E4E5] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#8A94A3]">© {new Date().getFullYear()} ELVARRA. Tous droits réservés.</p>
          <div className="flex justify-center lg:justify-start lg:flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#8A94A3]">
            <a href="/mentions-legales/" className="hover:text-[#14213D]">Mentions légales</a>
            <a href="/politique-de-confidentialite/" className="hover:text-[#14213D]">Politique de confidentialité</a>
            <a href="/politique-cookies/" className="hover:text-[#14213D]">Politique cookies</a>
            <button className="hover:text-[#14213D]">Gérer mes cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}