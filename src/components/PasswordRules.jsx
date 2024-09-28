import React from 'react';
import '../App.css';

function PasswordRules({ rules, captcha, refreshCaptcha }) {
  const unfulfilledRules = rules.filter(rule => !rule.fulfilled);
  const fulfilledRules = rules.filter(rule => rule.fulfilled);

  const visibleUnfulfilledRules = [];
  for (let i = 0; i < unfulfilledRules.length; i++) {
    if (i === 0 || unfulfilledRules[i - 1].fulfilled) {
      visibleUnfulfilledRules.push(unfulfilledRules[i]);
    }
  }

  return (
    <div>
      {visibleUnfulfilledRules.map((rule, index) => (
        <div
          key={index}
          className={`rule-container ${rule.fulfilled ? 'rule-fulfilled' : 'rule-unfulfilled'}`}
        >
          <p className={rule.fulfilled ? 'rule-text-fulfilled' : 'rule-text-unfulfilled'}>
            {rule.rule}

            {rule.rule.includes('CAPTCHA') && !rule.fulfilled && (
              <div className="captcha-container">
                <div className="captcha-image-container">
                  <img src={captcha.image} alt="Captcha" className="captcha-image" />
                </div>
                <button onClick={refreshCaptcha} className="captcha-refresh-button">🔄 Actualizar CAPTCHA</button>
              </div>
            )}

            {rule.rule.includes('ciudad') && !rule.fulfilled && (
              <div className="captcha-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1727220831817!6m8!1m7!1sCAoSLEFGMVFpcE5xTW1faDFsSHZ5S0FubmxkSkpVQjltYk1PQXBWREo5QmtteXZG!2m2!1d48.8619474!2d2.2887033!3f140.98986792434195!4f7.486182780699238!5f0.7820865974627469"
                  width="600"
                  height="450"
                  className="google-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Embed"
                ></iframe>
              </div>
            )}

            {rule.rule.includes('oculta') && !rule.fulfilled && (
              <div className="captcha-container">
                <iframe
                  src="https://flippity.net/wm.php?x=JU1l2,&t=WordMaster%20Game"
                  title="WordMaster Game"
                  className="wordmaster-iframe"
                  scrolling="no"
                  frameBorder="0"
                  allow=""
                ></iframe>
              </div>
            )}
          </p>
        </div>
      ))}

      {fulfilledRules.map((rule, index) => (
        <div key={index} className="rule-container rule-fulfilled">
          <p className="rule-text-fulfilled">
            ✔️ {rule.rule}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PasswordRules;
