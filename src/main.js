import './style.css';
import generateColor from './generateColor.js';


let counter = 1;

function render() {
  const colorElement = document.querySelector('.color');
  colorElement.style.background = `${generateColor()}`;
  colorElement.addEventListener('transitionend', (e) => {
    if (counter > 10) return;
    colorElement.style.background = `${generateColor()}`;
    counter += 1;
  });
}


render();