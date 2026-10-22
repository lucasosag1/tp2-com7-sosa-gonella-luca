import { useState } from 'react';

const About = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div>
      <h1>Sobre mí</h1>
      <p>
        Soy Luca Sosa Gonella, estudiante de programación en la UTN Facultad
        Regional Tucumán. Me interesa el desarrollo web y estoy metido en
        proyectos junto a un amigo: un chatbot de WhatsApp con IA para
        empresas, y un servicio de creación de páginas web para negocios
        locales que todavía no tienen presencia online.
      </p>

      {mostrarMas && (
        <p>
          Mi formación está enfocada en programación y desarrollo de
          software. Mi objetivo es seguir creciendo como desarrollador full
          stack, combinando buenas prácticas de React con integraciones de
          IA y APIs externas.
        </p>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default About;

