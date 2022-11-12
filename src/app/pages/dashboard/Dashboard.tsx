import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts/UsuarioLogado";
export const Dashboard = () => {
  const counter = useRef({ count: 0 });
  const { nomeUsuario } = useContext(UsuarioLogadoContext);
  return (
    <>
      <p>{counter.current.count}</p>
      <h1>Dashboard, olá {nomeUsuario}</h1>
      <button onClick={() => counter.current.count++}>Somar</button>
      <button onClick={() => console.log(counter.current.count)}>Log</button>
      <Link to="/entrar">Login</Link>
    </>
  );
};
