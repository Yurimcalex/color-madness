import './style.css';
import generateColor from './generateColor.js';

const colorElement = document.querySelector('.color');

function setBackground(element) {
  element.style.background = `${generateColor()}`;
}

function render() {  
  const callback = () => setBackground(colorElement);
  colorElement.addEventListener('transitionend', callback);
  callback();
  return () => colorElement.removeEventListener('transitionend', callback);
}


let reset;
const startBtn = document.querySelector('.controls__start');
const stopBtn = document.querySelector('.controls__stop');
const speedRange = document.getElementById('transition_speed');

startBtn.addEventListener('click', () => {
  reset = render();
});

stopBtn.addEventListener('click', () => {
  reset();
});