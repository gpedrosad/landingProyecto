export default function PromoCard() {
    return (
      <div className="max-w-sm mx-auto rounded-2xl bg-[#f1f7ff] px-6 py-8 text-center shadow-sm">
        {/* Etiqueta Promoción */}
        <div className="inline-block bg-white text-xs text-blue-600 font-medium px-3 py-1 rounded-full mb-3">
          Promoción
        </div>
  
        {/* Título y precio primer mes */}
        <h2 className="text-xl font-semibold text-gray-900">Primer mes</h2>
        <p className="text-4xl font-extrabold text-gray-900 mt-1">$10.000</p>
  
        {/* Icono en marco */}
        <div className="flex justify-center my-4">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.86 0-3.59-.508-5.02-1.38L3 20l1.21-3.63A7.994 7.994 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
  
        {/* Descripción */}
        <p className="text-sm text-gray-800 px-2 leading-relaxed">
          Incluye una <strong>asesoría privada con un especialista para optimizar tu perfil</strong> y destacar como un profesional.
        </p>
  
        {/* Botón */}
        <button className="mt-4 bg-[#1544EF] hover:bg-[#123bd1] text-white text-sm font-semibold px-5 py-2 rounded-lg transition">
          Empieza a ahorrar tiempo
        </button>
  
        {/* Separación visual */}
        <div className="border-t border-gray-200 my-6 mx-auto w-3/4" />
  
        {/* Plan Profesional */}
        <div className="inline-block bg-white text-xs text-blue-600 font-medium px-3 py-1 rounded-full">
          Plan Profesional
        </div>
  
        {/* Precio después */}
        <p className="mt-3 text-lg font-semibold text-gray-600">Después</p>
        <p className="text-3xl font-bold text-gray-700 mt-1">
          $45.709<span className="text-base font-medium">/mes</span>
        </p>
      </div>
    );
  }