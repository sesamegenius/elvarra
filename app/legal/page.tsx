import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Informations légales
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Retrouvez ici toutes les informations légales concernant Sésame et l&apos;utilisation de nos services.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Link 
          href="/legal/mentions"
          className="group p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
        >
          <div className="text-[#005493] text-4xl mb-4">📄</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mentions légales</h2>
          <p className="text-gray-600">
            Informations sur l&apos;entreprise, l&apos;éditeur du site et les responsabilités.
          </p>
        </Link>

        <Link 
          href="/legal/cgv"
          className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
        >
          <div className="text-green-600 text-4xl mb-4">📋</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Conditions générales de vente</h2>
          <p className="text-gray-600">
            Conditions d&apos;utilisation de nos services et modalités de vente.
          </p>
        </Link>

        <Link 
          href="/legal/privacy"
          className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
        >
          <div className="text-purple-600 text-4xl mb-4">🔒</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Politique de confidentialité</h2>
          <p className="text-gray-600">
            Protection de vos données personnelles et respect de votre vie privée.
          </p>
        </Link>
      </div>
    </div>
  );
}
