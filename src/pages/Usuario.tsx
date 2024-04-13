import { useParams } from "react-router-dom";

export const Usuario = () => {
  const { username } = useParams();

  return (
    <>
      <h3>Perfil Usuario</h3>
      <p>
        Nombre del Usuario: <b>{username}</b>
      </p>
    </>
  );
};
