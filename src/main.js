import './style.css';
import Colors from './Colors.js';
import Controls from './Controls.js';
import View from './View.js';
import Settings from './Settings.js';
import Effect from './Effect.js';


const initalColorAmount = 7;
const initialColorSpeed = 1;

const colors = new Colors(document.querySelector('.page'));
const controls = new Controls(initialColorSpeed, initalColorAmount);
const view = new View(initialColorSpeed, initalColorAmount);
const settings = new Settings(initialColorSpeed, initalColorAmount);
const effect = new Effect();


function render() {
  colors.render(settings.speeds);
  view.displayPattern(settings.pattern, colors.elements);
  effect.run(settings.effects, colors.elements);
}


render();


controls.attachAction('start', 'click', () => {
  render();
});


controls.attachAction('stop', 'click', () => {
  effect.stop();
});


controls.attachAction('speed', 'input', (e) => {
  const newSpeed = +e.target.value;
  settings.setValue('speed', newSpeed);
  render();
  view.updateText('colorSpeed', `${newSpeed.toFixed(2)}s`);
});


controls.attachAction('amount', 'change', (e) => {
  const colorAmount = +e.target.value;
  settings.setValue('amount', colorAmount);
  render();
  view.updateText('colorAmount', colorAmount);
});


controls.attachAction('open', 'click', () => {
  view.toggleControls();
});


controls.attachAction('randomSpeed', 'change', (e) => {
  if (e.target.checked) {
    controls.speed.disabled = true;
  } else {
    controls.speed.disabled = false;
  }
  settings.setValue('isRandomSpeed', e.target.checked);
  render();
});


controls.attachAction('pattern', 'change', (e) => {
  const pattern = e.target.value;
  settings.setValue('pattern', pattern);
  render();
});


controls.attachAction('effect', 'change', (e) => {
  const options = controls.effect.querySelectorAll('input');
  const selected = Array.from(options).filter(option => option.checked);
  const effects = selected.map(opt => opt.name);
  settings.setValue('effects', effects);
  render();
});