import ProjectCard from '../Componentes/ProjectCard';

const proyectos = [
  {
    id: 1,
    nombre: "Chatbot de WhatsApp con IA",
    descripcion: "Chatbot automatizado para empresas y emprendimientos, conectado mediante la WhatsApp Business API, desarrollado junto a un amigo.",
    tecnologias: "Node.js, WhatsApp Cloud API",
    link: "",
  },
  {
    id: 2,
    nombre: "Página web - Pepinillo Burger",
    descripcion: "Sitio web para una hamburguesería local, hecho a medida según su identidad de marca en redes sociales.",
    tecnologias: "React, HTML, CSS",
    link: "",
  },
  {
    id: 3,
    nombre: "Página web - Urbano Tuc",
    descripcion: "Sitio web para un local de reventa de zapatillas, con catálogo de productos y contacto.",
    tecnologias: "React, HTML, CSS",
    link: "",
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      <div className="projects-list">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            link={proyecto.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;