const HEXS = '0123456789abcdef';


export default function generateColor() {
  let color = '#';
  while (color.length < 7) {
    color += HEXS[ randomInt(0, 15) ];
  }
  return color;
}


export function randomInt(min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(result);
}