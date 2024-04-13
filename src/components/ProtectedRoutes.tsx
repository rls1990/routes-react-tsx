import { Navigate, Outlet } from "react-router-dom";
//Simular Autenticación
let auth = false;
auth = true;

export const ProtectedRoutes = () => {
  if (!auth) return <Navigate to="/login" />;
  return <Outlet />;
};
