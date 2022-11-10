import { useCallback, useMemo, useRef, useState } from "react";

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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
          }
          id="email"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name=""
          ref={inputPasswordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
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
