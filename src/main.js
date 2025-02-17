import './style.css';
import generateColor from './generateColor.js';

const colorElements = document.querySelectorAll('.color');
update(colorElements);


function update(colorElements) {
  for (let element of colorElements) {
    setBackground(element);
  }
}


function setBackground(element) {
  element.style.background = `${generateColor()}`;
}


function render(colorElements) {
  const callbacks = [];

  for (let element of colorElements) {
    const callback = () => setBackground(element);
    element.addEventListener('transitionend', callback);
    callbacks.push(callback);
    callback();
  }
  
  return () => {
    for (let element of colorElements) {
      element.removeEventListener('transitionend', callbacks.shift());
    }
  };
}


let reset;
const startBtn = document.querySelector('.controls__start');
const stopBtn = document.querySelector('.controls__stop');
const speedRange = document.getElementById('transition_speed');
const root = document.documentElement;

startBtn.addEventListener('click', () => {
  reset = render(colorElements);
});

stopBtn.addEventListener('click', () => {
  reset();
});

speedRange.addEventListener("input", (e) => {
  root.style.setProperty('--timer', `${e.target.value}s`);
});