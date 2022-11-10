import { useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length
  },[email])

  const handleEntrar = () => {
    console.log(email);
    console.log(password);
    
  };

  return (
    <>
      <p>Qtda email: {emailLength } </p>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name=""
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
