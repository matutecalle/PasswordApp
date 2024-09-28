import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import PasswordRules from './components/PasswordRules';
import CopyButton from './components/CopyButton';
import AdvancedPanel from './components/AdvancedPanel'; // Importa el panel avanzado
import { getRandomCaptcha } from './CaptchaConstants';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(getRandomCaptcha());
  const [showAdvancedPanel, setShowAdvancedPanel] = useState(false); // Estado para mostrar/ocultar el panel avanzado

  const sumDigits = (password) => {
    return password.split('')
      .filter(char => !isNaN(char) && char !== ' ')
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
  };

  // Verificar si la contraseña incluye la respuesta del CAPTCHA
  const isCaptchaValid = () => {
    return password.includes(captcha.answer);
  };

  // Reglas de la contraseña
  const rules = [
    { rule: 'Tu contraseña debe tener al menos 5 caracteres', fulfilled: password.length >= 5 },
    { rule: 'Tu contraseña debe incluir un número', fulfilled: /\d/.test(password) },
    { rule: 'Tu contraseña debe incluir una letra mayúscula', fulfilled: /[A-Z]/.test(password) },
    { rule: 'Tu contraseña debe incluir un carácter especial', fulfilled: /[!@#$%^&*()_+-={}[:;"'<>,.?/]/.test(password) },
    { rule: 'La contraseña debe coincidir con la respuesta del CAPTCHA', fulfilled: isCaptchaValid() },
    { rule: 'La suma de los dígitos de la contraseña debe ser 25', fulfilled: sumDigits(password) === 25 },
    { rule: 'Tu contraseña debe incluir el apellido del profesor', fulfilled: /(abratte)/i.test(password) },
    { rule: 'Tu contraseña debe incluir el numero 19 en números romanos', fulfilled: /(XIX)/.test(password) },
    { rule: 'Tu contraseña debe incluir la ciudad donde se encuentra esta peculiar torre', fulfilled: /(paris)/i.test(password) },
    { rule: 'Tu contraseña debe incluir la palabra oculta', fulfilled: /(react)/i.test(password) },
  ];

  // Función para calcular la fortaleza de la contraseña
  const calculateStrength = () => {
    const fulfilledRules = rules.filter(rule => rule.fulfilled).length;
    const totalRules = rules.length;
    const strengthPercentage = (fulfilledRules / totalRules) * 100;

    if (strengthPercentage === 100) {
      return 'Muy segura';
    } else if (strengthPercentage >= 66) {
      return 'Segura';
    } else if (strengthPercentage > 0) {
      return 'Poco segura';
    } else {
      return 'No cumple con ninguna regla';
    }
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const refreshCaptcha = () => {
    setCaptcha(getRandomCaptcha());
  };

  const toggleAdvancedPanel = () => {
    setShowAdvancedPanel(!showAdvancedPanel); // Alterna entre mostrar y ocultar el panel avanzado
  };

  const handleGeneratePassword = (generatedPassword) => {
    setPassword(generatedPassword); // Actualiza la contraseña generada desde el panel avanzado
  };

  return (
    <div className="App">
      <h1>Contraseña Segura?</h1>
      <PasswordInput password={password} onPasswordChange={handlePasswordChange} />
      <p>Fortaleza de la contraseña: <strong>{calculateStrength()}</strong></p>
      <PasswordRules password={password} rules={rules} captcha={captcha} refreshCaptcha={refreshCaptcha} />
      <CopyButton password={password} />
      
      <button onClick={toggleAdvancedPanel}>
        {showAdvancedPanel ? 'Ocultar Panel Avanzado' : 'Mostrar Panel Avanzado'}
      </button>

      {showAdvancedPanel && (
        <AdvancedPanel onGeneratePassword={handleGeneratePassword} />
      )}
    </div>
  );
}

export default App;
