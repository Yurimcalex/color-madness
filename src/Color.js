import generateColor from './generateColor.js';


export default class Color {
	constructor() {
		this.element = null;
	}

	create(speed) {
		const div = document.createElement('div');
		div.classList.add('color');
		div.style.transitionDuration = `${speed}s`;
		div.style.background = `${generateColor()}`;
		this.element = div;
	}

	render(speed) {
		this.create(speed);
		this.speed = speed;
	}
}