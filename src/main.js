import './style.css';
//import generateColor from './generateColor.js';

import Colors from './Colors.js';


const colors = new Colors();
colors.render(1);


// let colorElements = document.querySelectorAll('.color');
// update(colorElements);


// function update(colorElements) {
//   for (let element of colorElements) {
//     setBackground(element);
//   }
// }


// function setBackground(element) {
//   element.style.background = `${generateColor()}`;
// }


// function remove(colorElements) {
//   for (let element of colorElements) {
//     element.remove();
//   }
// }


// function create(amount) {
//   const page = document.querySelector('.page');
//   while (amount--) {
//     const div = document.createElement('div');
//     div.classList.add('color');
//     page.prepend(div);
//   }
//   return document.querySelectorAll('.color');
// }


// function updateWidth(amount) {
//   let width = 100;
//   if (amount <= 4) width = 50;
//   else if (amount <= 16) width = 25;
//   else width = 12;
//   root.style.setProperty('--width', `${width}%`);
// }


// function render(colorElements) {
//   console.log('rendered!', colorElements);
//   const callbacks = [];

//   for (let element of colorElements) {
//     const callback = () => setBackground(element);
//     element.addEventListener('transitionend', callback);
//     callbacks.push(callback);
//     callback();
//   }
  
//   return () => {
//     for (let element of colorElements) {
//       element.removeEventListener('transitionend', callbacks.shift());
//     }
//   };
// }


// let reset;
// const startBtn = document.querySelector('.controls__start');
// const stopBtn = document.querySelector('.controls__stop');
// const speedRange = document.getElementById('transition_speed');
// speedRange.value = '1';
// const numberRange = document.getElementById('colors_number');
// numberRange.value = '1';
// const root = document.documentElement;

// startBtn.addEventListener('click', () => {
//   if (reset) reset();
//   reset = render(document.querySelectorAll('.color'));
// });

// stopBtn.addEventListener('click', () => {
//   if (reset) reset();
// });

// speedRange.addEventListener("input", (e) => {
//   root.style.setProperty('--timer', `${e.target.value}s`);
//   document.getElementById('transition_speed_result').textContent = Number(e.target.value).toFixed(2) + 's';
// });

// numberRange.addEventListener("change", (e) => {
//   const value = e.target.value;
//   document.getElementById('colors_number_result').textContent = value;
//   if (reset) reset();
//   remove(colorElements);
//   colorElements = create(+value);
//   updateWidth(+value);
//   update(colorElements);

//   setTimeout(() => {
//     reset = render(colorElements);
//   }, 0);
// });