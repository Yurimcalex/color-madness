import generateColor from './generateColor.js';


export default class Colors {
	constructor() {
		this.colorElements = [];
		this.detachTransition = null;
	}

	setBackground(element) {
	  element.style.background = `${generateColor()}`;
	}

	attachTransition() {
		const callbacks = [];
		for (let element of this.colorElements) {
		  const callback = () => this.setBackground(element);
		  element.addEventListener('transitionend', callback);
		  callbacks.push(callback);
		}
		this.detachTransition = () => {
		  for (let element of this.colorElements) {
		    element.removeEventListener('transitionend', callbacks.shift());
		  }
		};
	}

	resetTransition() {
		if (this.detachTransition) this.detachTransition();
		this.detachTransition = null;
	}

	update() {
	  for (let element of this.colorElements) {
	    this.setBackground(element);
	  }
	}

	remove() {
	  for (let element of this.colorElements) {
	    element.remove();
	  }
	  this.colorElements = [];
	}

	create(amount) {
		const page = document.querySelector('.page');
		while (amount--) {
		  const div = document.createElement('div');
		  div.classList.add('color');
		  page.prepend(div);
		  this.colorElements.push(div);
		}
	}

	run() {
		if (this.detachTransition) return;
		this.attachTransition();
		setTimeout(() => {
			this.update();
		}, 0);
	}

	stop() {
		this.resetTransition();
	}

	render(amount) {
		this.resetTransition();
		this.remove();
		this.create(amount);
		this.run();
	}
}