import './style.css';
import Colors from './Colors.js';
import Controls from './Controls.js';
import CSSData from './CSSData.js';
import View from './View.js';
import { randomInt } from './generateColor.js';


const initalColorAmount = 7;
const initialColorSpeed = 1;
const cssData = new CSSData();
const colors = new Colors(document.querySelector('.page'));
const controls = new Controls(initialColorSpeed, initalColorAmount);
const view = new View(initialColorSpeed, initalColorAmount);


const settings = {
  amount: initalColorAmount,
  speeds: mapTransitionTime(initalColorAmount, initialColorSpeed)
};


function mapTransitionTime(amount, speed) {
  const speeds = [];
  while (amount--) {
    if (speed) speeds.push(speed);
    else speeds.push(randomInt(1, 30) / 10);
  }
  return speeds;
}


colors.render(settings.speeds);


controls.attachAction('start', 'click', () => {
  colors.run(settings.speeds);
});


controls.attachAction('stop', 'click', () => {
  colors.stop();
});


controls.attachAction('speed', 'input', (e) => {
  const newSpeed = +e.target.value;
  cssData.setTransitionTime(newSpeed);
  settings.speeds = mapTransitionTime(settings.amount, newSpeed);
  colors.render(settings.speeds);
  view.updateText('colorSpeed', `${newSpeed.toFixed(2)}s`);
});


controls.attachAction('amount', 'change', (e) => {
  const colorAmount = +e.target.value;
  const isRandomSpeed = controls.randomSpeed.checked;
  cssData.setColorWidth(colorAmount);
  if (isRandomSpeed) {
    settings.speeds = mapTransitionTime(colorAmount);
    colors.render(settings.speeds, true);
  } else {
    colors.render(mapTransitionTime(colorAmount, cssData.transitionTime));
  }
  settings.amount = colorAmount;
  view.updateText('colorAmount', colorAmount);
});


controls.attachAction('open', 'click', () => {
  document.querySelector('.controls').classList.toggle('controls_hidden');
});


controls.attachAction('randomSpeed', 'change', (e) => {
  if (e.target.checked) {
    settings.speeds = mapTransitionTime(settings.amount);
    colors.render(settings.speeds, true);
    controls.speed.disabled = true;
  } else {
    colors.render(settings.speeds);
    controls.speed.disabled = false;
  }
});