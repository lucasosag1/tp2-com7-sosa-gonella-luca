import { NavLink } from 'react-router-dom';

const enlaceClase = ({ isActive }) => (isActive ? 'enlace activo' : 'enlace');

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <NavLink to="/" className={enlaceClase}>Home</NavLink>
        <NavLink to="/about" className={enlaceClase}>Sobre mí</NavLink>
        <NavLink to="/skills" className={enlaceClase}>Habilidades</NavLink>
        <NavLink to="/projects" className={enlaceClase}>Proyectos</NavLink>
        <NavLink to="/contact" className={enlaceClase}>Contacto</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;