import { Link } from "react-router-dom";
export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-pink-500 text-white py-20">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold">Testimonios</h1>
        <p className="text-lg mt-2">Nuestros clientes son nuestro mejor aval. Descubre cómo hemos ayudado a transformar negocios.</p>
      </div>

      {/* Testimonials Carousel */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-gray-800 transform transition-transform hover:scale-105 hover:shadow-2xl animate-slide-up">
          <p className="italic">"Gracias a esta agencia, nuestras ventas online se dispararon. Son los mejores en marketing digital."</p>
          <span className="block mt-4 font-bold text-pink-600">- Carlos R., CEO de XYZ Company</span>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-gray-800 transform transition-transform hover:scale-105 hover:shadow-2xl animate-slide-up-delayed">
          <p className="italic">"Tienen un equipo comprometido y profesional que entiende nuestras necesidades. ¡Los recomiendo sin duda!"</p>
          <span className="block mt-4 font-bold text-pink-600">- Ana M., Directora de Marketing en ABC Corp</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-gray-800 transform transition-transform hover:scale-105 hover:shadow-2xl animate-slide-up">
          <p className="italic">"La creatividad y dedicación del equipo han superado nuestras expectativas. ¡Son un socio invaluable!"</p>
          <span className="block mt-4 font-bold text-pink-600">- Juan P., Fundador de StartUp Innovadora</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-gray-800 transform transition-transform hover:scale-105 hover:shadow-2xl animate-slide-up-delayed">
          <p className="italic">"Un servicio excepcional y resultados visibles. No podría estar más feliz con nuestra colaboración."</p>
          <span className="block mt-4 font-bold text-pink-600">- Laura S., Gerente de Ventas en TechCorp</span>
        </div>
      </div>

      {/* Call to Action - positioned lower */}
      <div className="text-center mt-20 animate-fade-in-delayed">
        <h2 className="text-2xl font-semibold">¿Listo para ser nuestro próximo caso de éxito?</h2>
        <p className="mt-4 text-lg">Contáctanos hoy mismo y descubre cómo podemos ayudar a tu negocio a crecer.</p>
        <Link to="/contact">
          <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 mt-6">
            Contáctanos
          </button>
        </Link>
      </div>
    </div>
  );
}
