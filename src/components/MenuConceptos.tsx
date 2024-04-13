import { Link, NavLink } from "react-router-dom";

export const MenuConceptos = () => {
  return (
    <>
      <nav id="menu-conceptos-basicos">
        <ol>
          <li>
            <span>Componente Link: </span>
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/no-existe">Error 404</Link>
          </li>

          <li>
            <span>Componente NavLink: </span>
            <p>De forma predeterminada detecta la clase css a.active</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/acerca">Acerca</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <NavLink to="/no-existe">Error 404</NavLink>
          </li>

          <li>
            <span>Parámetros: </span>
            <Link to="/usuario/usuario1">Usuario 1</Link>
            <Link to="/usuario/usuario2">Usuario 2</Link>
          </li>

          <li>
            <span>Parámetros de Consulta: </span>
            <Link to="productos">Productos</Link>
          </li>

          <li>
            <span>Redirecciones: </span>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <span>Rutas Anidadas: </span>
            <Link to="/react">React</Link>
          </li>

          <li>
            <span>Rutas Privadas: </span>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <span>Hash Router</span>
          </li>
        </ol>
      </nav>
    </>
  );
};
