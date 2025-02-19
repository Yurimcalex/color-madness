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
  amount: initalColorAmount
};

colors.render(initalColorAmount, cssData.transitionTime);

controls.attachAction('start', 'click', () => {
  if (controls.randomSpeed.checked) {
    colors.run(settings.speeds, true);
  } else {
    colors.run(cssData.transitionTime);
  }
});

controls.attachAction('stop', 'click', () => {
  colors.stop();
});

controls.attachAction('speed', 'input', (e) => {
  const value = e.target.value;
  cssData.setTransitionTime(+value);
  document.getElementById('transition_speed_result').textContent = Number(value).toFixed(2) + 's';
});

controls.attachAction('amount', 'change', (e) => {
  const value = +e.target.value;
  cssData.setColorWidth(value);
  if (controls.randomSpeed.checked) {
    let amount = value;
    const speeds = [];
    while(amount--) {
      speeds.push(randomInt(1, 30) / 10);
    }
    colors.render(value, speeds, true);
    settings.speeds = speeds;
  } else {
    colors.render(value, cssData.transitionTime);
  }
  document.getElementById('colors_number_result').textContent = value;
  settings.amount = value;
});

controls.attachAction('open', 'click', () => {
  document.querySelector('.controls').classList.toggle('controls_hidden');
});

controls.attachAction('randomSpeed', 'change', (e) => {
  if (e.target.checked) {
    let amount = settings.amount;
    const speeds = [];
    while(amount--) {
      speeds.push(randomInt(1, 30) / 10);
    }
    colors.render(settings.amount, speeds, true);
    settings.speeds = speeds;
  } else {
    colors.render(settings.amount, cssData.transitionTime);
  }
});