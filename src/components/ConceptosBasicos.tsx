import React, { Suspense } from "react";
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { MenuConceptos } from "./MenuConceptos";
import { Usuario } from "../pages/Usuario";
import { Productos } from "../pages/Productos";
import { ReactTopics } from "../pages/ReactTopics";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Loading } from "./Loading.tsx";

const Dashboard = React.lazy(() =>
  import("../pages/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);

export const ConceptosBasicos = () => {
  return (
    <>
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/acerca" Component={Acerca} />
          <Route path="/contacto" Component={Contacto} />
          <Route path="/usuario/:username" Component={Usuario} />
          <Route path="/productos" Component={Productos} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/react/*" Component={ReactTopics} />
          <Route path="/login" Component={Login} />
          <Route Component={ProtectedRoutes}>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" Component={Error404} />
        </Routes>
      </Router>

      <hr />

      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/acerca" Component={Acerca} />
          <Route path="/contacto" Component={Contacto} />
          <Route path="/usuario/:username" Component={Usuario} />
          <Route path="/productos" Component={Productos} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/react/*" Component={ReactTopics} />
          <Route path="/login" Component={Login} />
          <Route Component={ProtectedRoutes}>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" Component={Error404} />
        </Routes>
      </HashRouter>
    </>
  );
};
