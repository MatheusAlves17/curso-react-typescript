import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts/UsuarioLogado";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { nomeUsuario } = useContext(UsuarioLogadoContext);

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <>
      <p>Qtda email: {emailLength} </p>
      <p>{nomeUsuario}</p>
      <h1>Login</h1>
      <form action="">
        <InputLogin
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          id="Password"
          label="Senha"
          type="password"
          value={password}
          onChange={(newValue) => setPassword(newValue)}
          ref={inputPasswordRef}
        />
      </form>
      <ButtonLogin onClick={handleEntrar} type="button">
        Entrar
      </ButtonLogin>
      <ButtonLogin type="button">Cadastrar-se</ButtonLogin>
      <p>
        {email} --- {password}
      </p>
    </>
  );
};
