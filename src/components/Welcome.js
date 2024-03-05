import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import './css/Welcome.css' // Importe um arquivo CSS para seus estilos
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "seuUsuario" && password === "suaSenha") {
      alert("Login bem-sucedido!");
    } else {
      alert("Login falhou. Verifique suas credenciais.");
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome-container">
      <img src="/logo.png" alt="ReactJs logo" className="logo" />
      <p className="welcome-text">Faça o seu login</p>
      <div className="input-container">
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Entrar
      </button>
      <button className="google-signin-button" onClick={googleSignIn}>
        <img
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
