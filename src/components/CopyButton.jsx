import React, { useState } from 'react';
import '../App.css';

function CopyButton({ password }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div>
      <button className="copy-button" onClick={copyToClipboard}>Copiar Contraseña</button>
      {copied && <p className="copied-message">Contraseña copiada al portapapeles</p>}
    </div>
  );
}

export default CopyButton;
