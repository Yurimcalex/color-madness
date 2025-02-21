import generateColor from './generateColor.js';


export default class Color {
	constructor() {
		this.element = null;
		this.detachTransition = null;
		this.setBackground = this.setBackground.bind(this);
	}

	setBackground() {
		this.element.style.background = `${generateColor()}`;
	}

	attachTransition() {
		this.element.addEventListener('transitionend', this.setBackground);
		this.detachTransition = () =>
			this.element.removeEventListener('transitionend', this.setBackground);
	}

	resetTransition() {
		if (this.detachTransition) this.detachTransition();
		this.detachTransition = null;
	}

	update() {
		this.setBackground();
	}

	remove() {
		this.resetTransition();
	}

	create(speed) {
		const div = document.createElement('div');
		div.classList.add('color');
		div.style.transitionDuration = `${speed}s`;
		this.element = div;
	}

	run(speed) {
		if (this.detachTransition) return;
		this.attachTransition();
		setTimeout(() => {
			this.update();
		}, (speed) + 100);
	}

	stop() {
		this.resetTransition();
	}

	render(speed) {
		this.create(speed);
		this.run(speed);
		this.speed = speed;
	}
}