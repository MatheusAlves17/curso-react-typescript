import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts/UsuarioLogado";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
};
