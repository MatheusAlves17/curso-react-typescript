import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const counter = useRef({ count: 0 });
  const { nomeUsuario } = useUsuarioLogado();
  return (
    <>
      <p>{counter.current.count}</p>
      <p>{nomeUsuario}</p>
      <h1>Dashboard</h1>
      <button onClick={() => counter.current.count++}>Somar</button>
      <button onClick={() => console.log(counter.current.count)}>Log</button>
      <Link to="/entrar">Login</Link>
    </>
  );
};
