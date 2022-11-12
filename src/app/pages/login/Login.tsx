import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h1>Login</h1>
      <form action="">
        <InputLogin
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}

        />
        <InputLogin
          id="Password"
          label="Senha"
          type="password"
          value={password}
          onChange={newValue => setPassword(newValue)}
          ref={inputPasswordRef}
        />
      </form>
      <button onClick={handleEntrar} type="button">
        Entrar
      </button>
      <p>
        {email} --- {password}
      </p>
    </>
  );
};
