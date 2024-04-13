/* eslint-disable prefer-const */
import { useLocation, useNavigate } from "react-router-dom";

export const Productos = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const LIMIT = 20;
  let start: number = parseInt(query.get("inicio") + "") || 1;
  let end = parseInt(query.get("fin") + "") || LIMIT;

  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`, {
      relative: "route",
    });
  };

  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <>
      <h3>Productos</h3>
      <p>
        Mostrando Productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </>
  );
};
