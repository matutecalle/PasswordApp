import React, { useState } from 'react';

function AdvancedPanel({ onGeneratePassword }) {
  const [length, setLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    let characters = '';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialChars) characters += '!@#$%^&*()-_=+[]{}|;:,.<>';

    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    onGeneratePassword(password); // Enviar la contraseña generada al componente principal
  };

  return (
    <div className="advanced-panel">
      <h3>Configuración avanzada para generar contraseña</h3>
      <div>
        <label>Largo de la contraseña: </label>
        <input
          type="number"
          value={length}
          min="5"
          max="20"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Incluir letras minúsculas
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Incluir letras mayúsculas
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Incluir números
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Incluir caracteres especiales
        </label>
      </div>
      <button onClick={generatePassword}>Generar Contraseña</button>
    </div>
  );
}

export default AdvancedPanel;
