import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 py-20">
      {/* Hero Section with Lema */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-pink-600 animate-slide-down">Nuestros Servicios</h1>
        <p className="mt-4 text-xl text-gray-700 max-w-xl mx-auto animate-fade-in-delayed">
          "Innovación, creatividad y resultados. Creamos soluciones digitales para impulsar tu éxito."
        </p>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
          Descubre cómo nuestras estrategias personalizadas pueden transformar tu negocio digital y llevarlo al siguiente nivel. Nos enfocamos en resultados medibles que generan impacto real.
        </p>
      </div>
      
      {/* Service Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-2xl transition transform hover:scale-110 animate-bounce-in">
          <h3 className="text-3xl font-semibold text-pink-600">Marketing en Redes Sociales</h3>
          <p className="mt-4 text-gray-700">Impulsa tu marca en redes sociales como Facebook, Instagram y LinkedIn con campañas que conectan con tu audiencia y generan resultados significativos.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-2xl transition transform hover:scale-110 animate-bounce-in">
          <h3 className="text-3xl font-semibold text-pink-600">Optimización SEO</h3>
          <p className="mt-4 text-gray-700">Posiciona tu página web en los primeros resultados de búsqueda de Google con estrategias SEO que aumentan tu visibilidad y atraen clientes potenciales.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-2xl transition transform hover:scale-110 animate-bounce-in">
          <h3 className="text-3xl font-semibold text-pink-600">Anuncios Pay-Per-Click (PPC)</h3>
          <p className="mt-4 text-gray-700">Maximiza el retorno de inversión (ROI) con campañas PPC optimizadas que convierten visitantes en clientes mediante anuncios altamente efectivos.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 hover:shadow-2xl transition transform hover:scale-110 animate-bounce-in">
          <h3 className="text-3xl font-semibold text-pink-600">Desarrollo Web Personalizado</h3>
          <p className="mt-4 text-gray-700">Creamos sitios web personalizados y optimizados que destacan por su diseño, funcionalidad y rendimiento, mejorando la experiencia de tus usuarios.</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-16 animate-slide-up">
        <Link to="/contact">
          <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105">
            Solicita más información
          </button>
        </Link>
      </div>
    </div>
  );
}
