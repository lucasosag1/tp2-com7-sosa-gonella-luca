const ProjectCard = ({ nombre, descripcion, tecnologias, link }) => {
  const abrirRepo = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="project-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Tecnologías:</strong> {tecnologias}</p>
      {link && (
        <button onClick={abrirRepo}>Ver repositorio</button>
      )}
    </div>
  );
};

export default ProjectCard;