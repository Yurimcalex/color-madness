import './style.css';
import Colors from './Colors.js';
import Controls from './Controls.js';
import View from './View.js';
import { randomInt } from './generateColor.js';


const initalColorAmount = 7;
const initialColorSpeed = 1;

const colors = new Colors(document.querySelector('.page'));
const controls = new Controls(initialColorSpeed, initalColorAmount);
const view = new View(initialColorSpeed, initalColorAmount);


const settings = {
  speed: initialColorSpeed,
  amount: initalColorAmount,
  speeds: mapTransitionTime(initalColorAmount, initialColorSpeed),
  pattern: 'linear'
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
view.displayPattern(settings.pattern, colors.elements);


controls.attachAction('start', 'click', () => {
  colors.run(settings.speeds);
});


controls.attachAction('stop', 'click', () => {
  colors.stop();
});


controls.attachAction('speed', 'input', (e) => {
  const newSpeed = +e.target.value;
  settings.speed = newSpeed;
  settings.speeds = mapTransitionTime(settings.amount, newSpeed);
  colors.render(settings.speeds);
  view.displayPattern(settings.pattern, colors.elements);
  view.updateText('colorSpeed', `${newSpeed.toFixed(2)}s`);
});


controls.attachAction('amount', 'change', (e) => {
  const colorAmount = +e.target.value;
  const isRandomSpeed = controls.randomSpeed.checked;
  if (isRandomSpeed) {
    settings.speeds = mapTransitionTime(colorAmount);
    colors.render(settings.speeds);
  } else {
    settings.speeds = mapTransitionTime(colorAmount, settings.speed);
    colors.render(settings.speeds);
  }
  settings.amount = colorAmount;
  view.displayPattern(settings.pattern, colors.elements);
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
    settings.speeds = mapTransitionTime(settings.amount, settings.speed);
    colors.render(settings.speeds);
    controls.speed.disabled = false;
  }
  view.displayPattern(settings.pattern, colors.elements);
});


controls.attachAction('pattern', 'change', (e) => {
  const pattern = e.target.value;
  colors.render(settings.speeds);
  view.displayPattern(pattern, colors.elements);
  settings.pattern = pattern;
});