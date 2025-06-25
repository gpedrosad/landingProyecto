export default function PromoBanner() {
    return (
      <div className="bg-[#0e1629] text-center text-white px-4 py-10 rounded-xl max-w-xl mx-auto">
        <h2 className="text-2xl font-bold leading-snug mb-3">
          Empieza hoy por <span className="text-white">$10.000</span> el<br />primer mes
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Crea tu cuenta y únete a la comunidad de independientes que transforman su consulta en su mejor proyecto.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md text-sm transition">
          Crea tu cuenta
        </button>
      </div>
    );
  }