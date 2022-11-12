import { createContext, ReactNode } from "react";

interface IChildrenOfProvider {
  children: ReactNode;
}

interface IUsuarioLogadoContextData {
  nomeUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<IChildrenOfProvider> = ({
  children,
}) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeUsuario: "Lucas" }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
