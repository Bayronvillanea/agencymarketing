export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-orange-400 text-white py-20">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl font-bold animate-slide-up">Contáctanos</h1>
        <p className="text-lg animate-fade-in-delayed">
          Estamos aquí para ayudarte a crear estrategias personalizadas que harán despegar tu negocio. Completa el formulario y te contactaremos pronto.
        </p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-bounce-in text-gray-800">
          <div className="mb-6">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="name">Nombre</label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300 ease-in-out"
              type="text"
              id="name"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300 ease-in-out"
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="message">Mensaje</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300 ease-in-out"
              id="message"
              rows="5"
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
