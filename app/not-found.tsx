import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Illustration 404 */}
        <div className="mb-8">
          <div className="relative mx-auto w-48 h-48 mb-6">
            {/* Chiffres 404 stylisés */}
            <div className="text-8xl md:text-9xl font-bold text-blue-600 opacity-20 absolute inset-0 flex items-center justify-center">
              404
            </div>
            {/* Icône par-dessus */}
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🔍 Oups ! Page introuvable
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Il semblerait que la page que vous recherchez n&apos;existe pas ou a été déplacée. 
          Pas de panique, nos solutions digitales vous aideront à retrouver votre chemin !
        </p>

        {/* Suggestions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Que souhaitez-vous faire ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/"
              className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Retour à l&apos;accueil</div>
                <div className="text-sm text-gray-600">Découvrir nos solutions</div>
              </div>
            </Link>

            <Link 
              href="/solutions"
              className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Nos solutions</div>
                <div className="text-sm text-gray-600">Suite Sésame Genius</div>
              </div>
            </Link>

            <Link 
              href="/contact"
              className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Nous contacter</div>
                <div className="text-sm text-gray-600">Besoin d&apos;aide ?</div>
              </div>
            </Link>

            <Link 
              href="/a-propos"
              className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">À propos</div>
                <div className="text-sm text-gray-600">En savoir plus</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bouton principal de retour */}
        <div className="mb-8 space-x-4">
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center bg-white border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 overflow-hidden"
          >
            <span className="group-hover:opacity-0 group-hover:-translate-x-4 transition-all duration-300">
              Retour à l&apos;accueil
            </span>
            <svg className="absolute w-6 h-6 opacity-0 translate-x-4 rotate-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 overflow-hidden"
          >
            <span className="group-hover:opacity-0 group-hover:-translate-x-4 transition-all duration-300">
              Nous Contacter
            </span>
            <svg className="absolute w-6 h-6 opacity-0 translate-x-4 rotate-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>

        {/* Message encourageant */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <p className="text-gray-700">
            <strong>💡 Conseil :</strong> Utilisez notre menu de navigation ou contactez-nous si vous ne trouvez pas ce que vous cherchez !
          </p>
        </div>

        {/* Code d'erreur discret */}
        <div className="mt-8 text-sm text-gray-400">
          <p>Code d&apos;erreur : 404 - Page non trouvée</p>
        </div>
      </div>
    </div>
  );
}
