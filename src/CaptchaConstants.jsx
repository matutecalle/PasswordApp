// CaptchaConstants.js
export const captchas = [
  { image: require('./images/captchas/captcha1.JPG'), answer: '8f5dDL' },
  { image: require('./images/captchas/captcha2.JPG'), answer: '3kFM0p' },
  // Puedes agregar más captchas de la misma manera
];

export function getRandomCaptcha() {
  return captchas[Math.floor(Math.random() * captchas.length)];
}
