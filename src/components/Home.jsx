import sinFondoLogo from '../img/sinFondoLogo.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 to-orange-400 text-white flex items-center justify-center py-20 animate-fade-in">
        <div className="text-center space-y-5 max-w-lg">
          <img src={sinFondoLogo} alt="Agency Logo" className="mx-auto w-32 animate-bounce" />
          <h1 className="text-5xl font-bold animate-slide-up">
            Impulsa tu Negocio con Marketing Digital Potente
          </h1>
          <p className="text-lg animate-fade-in-delayed">
            Somos los expertos en estrategias digitales que transforman marcas, amplían tu alcance y multiplican tus ventas.
          </p>
          <Link to="/services">
            <button className="bg-white text-pink-500 px-6 py-3 mt-5 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 animate-slide-up-delayed">
              Empieza Ahora
            </button>
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold animate-fade-in">Servicios que Aumentan tus Resultados</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transition transform hover:scale-105 animate-slide-up">
            <h3 className="text-2xl font-semibold">Marketing en Redes Sociales</h3>
            <p className="mt-2">Tu audiencia está en las redes sociales, ¿y tú? Crecemos tu marca en Facebook, Instagram y LinkedIn con campañas altamente segmentadas que conectan directamente con tus clientes ideales.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transition transform hover:scale-105 animate-slide-up">
            <h3 className="text-2xl font-semibold">Optimización SEO</h3>
            <p className="mt-2">Posiciona tu negocio en lo más alto de los resultados de búsqueda de Google. Te ayudamos a atraer tráfico orgánico de calidad que convierta en ventas reales.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transition transform hover:scale-105 animate-slide-up">
            <h3 className="text-2xl font-semibold">Anuncios Pay-Per-Click (PPC)</h3>
            <p className="mt-2">Maximiza cada clic con nuestras campañas de PPC. Te garantizamos un retorno de inversión sólido con anuncios ultra-segmentados que llegan justo a donde más lo necesitas.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 animate-bounce-in">
              Descubre cómo podemos ayudarte
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-pink-500 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold animate-fade-in">Historias de Éxito de Nuestros Clientes</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-pink-600 p-6 rounded-lg shadow-lg max-w-sm animate-slide-left">
            <p className="italic">"Esta agencia triplicó nuestras ventas online en solo unos meses. Son verdaderos expertos en marketing digital."</p>
            <span className="block mt-4 font-bold">- Carlos R., CEO de XYZ Company</span>
          </div>
          <div className="bg-pink-600 p-6 rounded-lg shadow-lg max-w-sm animate-slide-left-delayed">
            <p className="italic">"Profesionalismo, eficiencia y creatividad en cada proyecto. ¡Los recomiendo 100%!"</p>
            <span className="block mt-4 font-bold">- Ana M., Directora de Marketing en ABC Corp</span>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 animate-bounce-in">
              Conoce más clientes satisfechos
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold animate-fade-in">¿Listo para Despegar tu Negocio?</h2>
          <p className="text-lg">No dejes que tu competencia te sobrepase. Estamos aquí para crear estrategias personalizadas que te harán destacar en tu industria. ¡Agenda tu consulta hoy mismo!</p>
          <Link to="/contact">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 animate-bounce-in">
              Agendar Consulta
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-6 text-center animate-fade-in-delayed">
        <p>&copy; 2024 Agency Marketing Digital. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
