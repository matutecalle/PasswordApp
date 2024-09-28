import React from 'react';

function PasswordStrength({ rules, strength }) {
  return (
    <div>
      <h3>Fortaleza de la contraseña: {strength}</h3>
      <ul>
        {rules.map((rule, index) => (
          <li key={index} style={{ color: rule.fulfilled ? 'green' : 'red' }}>
            {rule.fulfilled ? '✔️' : '❌'} {rule.rule}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordStrength;
