import React, { useState } from 'react';
import '../App.css';

function PasswordInput({ password, onPasswordChange }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input-container">
      <input
        type={passwordVisible ? 'text' : 'password'}
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Escribe tu contraseña"
        className="password-input"
      />
      <button onClick={togglePasswordVisibility}>
        {passwordVisible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}

export default PasswordInput;
