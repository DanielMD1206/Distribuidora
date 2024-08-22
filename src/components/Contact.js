import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-[120px] ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Contáctenos</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          En Yesid, valoramos tu opinión y estamos aquí para ayudarte. Si tienes alguna pregunta, inquietud o simplemente deseas compartir tus pensamientos con nosotros, no dudes en ponerte en contacto. Estamos comprometidos a brindarte la mejor atención posible.
        </p>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Formulario de Contacto</h2>
          <p className="text-lg text-gray-700 mb-6">
            Por favor completa el siguiente formulario con la mayor precisión posible para que podamos asistirte de manera eficiente. Asegúrate de proporcionar una dirección de correo electrónico válida y un número de teléfono si deseas que te contactemos por llamada.
          </p>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Número de Teléfono (Opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-[#ccc] border border-transparent rounded-md shadow-sm text-white text-base font-medium hover:bg-[#000]  transition ease delay-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-12 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
          <p className="text-lg text-gray-700 mb-6">
            A continuación, encontrarás nuestras principales vías de contacto. No dudes en comunicarte con nosotros a través del canal que prefieras. Estamos aquí para resolver tus dudas y atender tus necesidades.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dirección</h3>
            <p className="text-lg text-gray-700">
              Calle Falsa 123, Bogota , Colombia
            </p>
            <p className="text-lg text-gray-700">
              Nuestro centro de atención está ubicado en el corazón de la ciudad, cerca de diversos puntos de interés. Si planeas visitarnos, te recomendamos que te pongas en contacto con nosotros primero para coordinar tu visita.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teléfono</h3>
            <p className="text-lg text-gray-700">
              +52 123 456 7890
            </p>
            <p className="text-lg text-gray-700">
              Llámanos durante nuestro horario laboral para consultas urgentes o asistencia inmediata. Nuestro equipo está disponible para responder tus llamadas y proporcionarte la ayuda que necesites.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
            <p className="text-lg text-gray-700">
              contacto@yesid.com
            </p>
            <p className="text-lg text-gray-700">
              Para consultas generales, sugerencias o cualquier otra comunicación, envíanos un correo electrónico. Nos comprometemos a responder a todos los mensajes en un plazo de 24 a 48 horas.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Horario de Atención</h3>
            <p className="text-lg text-gray-700">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </p>
            <p className="text-lg text-gray-700">
              Estamos disponibles durante el horario laboral para asistirte. Si necesitas contactarnos fuera de este horario, por favor, utiliza nuestro formulario de contacto o envía un correo electrónico, y te responderemos a la mayor brevedad posible.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Encuéntranos en Redes Sociales</h3>
            <p className="text-lg text-gray-700 mb-4">
              Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas noticias, promociones y eventos. Te invitamos a interactuar con nosotros y a formar parte de nuestra comunidad en línea.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/yesid" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="https://twitter.com/yesid" className="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="https://instagram.com/yesid" className="text-pink-500 hover:text-pink-700">Instagram</a>
              <a href="https://linkedin.com/company/yesid" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
