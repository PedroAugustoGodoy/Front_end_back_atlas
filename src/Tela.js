import React, { useState } from 'react';
import './Tela.css';


function Tela() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    console.log('Criar Conta');
  };

  return (
    <div className="Tela">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button type="button" onClick={handleLogin}>
              Entrar
            </button>
            <button type="button" onClick={handleCreateAccount}>
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tela;


