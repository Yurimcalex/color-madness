import './style.css';
import Colors from './Colors.js';
import Controls from './Controls.js';
import CSSData from './CSSData.js';


const initalColorAmount = 7;
const cssData = new CSSData();
const colors = new Colors();
const controls = new Controls(cssData.transitionTime, initalColorAmount);

colors.render(initalColorAmount, cssData.transitionTime);

controls.attachAction('start', 'click', () => {
  colors.run(cssData.transitionTime);
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
  colors.render(value, cssData.transitionTime);
  document.getElementById('colors_number_result').textContent = value;
});

controls.attachAction('open', 'click', () => {
  document.querySelector('.controls').classList.toggle('controls_hidden');
});