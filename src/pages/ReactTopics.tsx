import { Link, Route, Routes } from "react-router-dom";

export const ReactTopics = () => {
  return (
    <>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`/react/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`/react/props`}>Props</Link>
        </li>
        <li>
          <Link to={`/react/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`/react/componentes`}>Componentes</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" Component={Presentacion} />
        <Route path="jsx" Component={JSX} />
        <Route path="props" Component={Props} />
        <Route path="estado" Component={Estado} />
        <Route path="componentes" Component={Componentes} />
      </Routes>
    </>
  );
};

const Presentacion = () => {
  return (
    <>
      <h4>Elija un Tema de React</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem
        vero odio magnam in dignissimos odit fuga iure dicta saepe officia quis
        ipsam, necessitatibus doloremque voluptatibus. Saepe quam assumenda
        iusto.
      </p>
    </>
  );
};

const JSX = () => {
  return (
    <>
      <h4>JSX</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem
        vero odio magnam in dignissimos odit fuga iure dicta saepe officia quis
        ipsam, necessitatibus doloremque voluptatibus. Saepe quam assumenda
        iusto.
      </p>
    </>
  );
};

const Props = () => {
  return (
    <>
      <h4>Props</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem
        vero odio magnam in dignissimos odit fuga iure dicta saepe officia quis
        ipsam, necessitatibus doloremque voluptatibus. Saepe quam assumenda
        iusto.
      </p>
    </>
  );
};

const Estado = () => {
  return (
    <>
      <h4>Estado</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem
        vero odio magnam in dignissimos odit fuga iure dicta saepe officia quis
        ipsam, necessitatibus doloremque voluptatibus. Saepe quam assumenda
        iusto.
      </p>
    </>
  );
};

const Componentes = () => {
  return (
    <>
      <h4>Componentes</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem
        vero odio magnam in dignissimos odit fuga iure dicta saepe officia quis
        ipsam, necessitatibus doloremque voluptatibus. Saepe quam assumenda
        iusto.
      </p>
    </>
  );
};
