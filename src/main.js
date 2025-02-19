import './style.css';
import Colors from './Colors.js';
import Controls from './Controls.js';
import CSSData from './CSSData.js';
import { randomInt } from './generateColor.js';


const initalColorAmount = 7;
const cssData = new CSSData();
const colors = new Colors(document.querySelector('.page'));
const controls = new Controls(cssData.transitionTime, initalColorAmount);

const settings = {
  amount: initalColorAmount,
  speeds: mapTransitionTime(initalColorAmount, cssData.transitionTime)
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
  const value = e.target.value;
  cssData.setTransitionTime(+value);
  settings.speeds = mapTransitionTime(settings.amount, +value);
  colors.render(settings.speeds);
  document.getElementById('transition_speed_result').textContent = Number(value).toFixed(2) + 's';
});

controls.attachAction('amount', 'change', (e) => {
  const value = +e.target.value;
  cssData.setColorWidth(value);
  if (controls.randomSpeed.checked) {
    const speeds = mapTransitionTime(value);
    colors.render(speeds, true);
    settings.speeds = speeds;
  } else {
    colors.render(mapTransitionTime(value, cssData.transitionTime));
  }
  document.getElementById('colors_number_result').textContent = value;
  settings.amount = value;
});

controls.attachAction('open', 'click', () => {
  document.querySelector('.controls').classList.toggle('controls_hidden');
});

controls.attachAction('randomSpeed', 'change', (e) => {
  if (e.target.checked) {
    const speeds = mapTransitionTime(settings.amount);
    colors.render(speeds, true);
    settings.speeds = speeds;
    controls.speed.disabled = true;
  } else {
    colors.render(settings.speeds);
    controls.speed.disabled = false;
  }
});