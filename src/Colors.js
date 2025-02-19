//import generateColor from './generateColor.js';
import Color from './Color.js';


export default class Colors {
	constructor(node) {
		this.node = node;
		this.elements = [];
	}

	run(speed) {
		this.elements.forEach(element => element.run(speed));
	}

	stop() {
		this.elements.forEach(element => element.stop());
	}

	render(amount, speed) {
		this.elements.forEach(element => element.remove());
		this.elements = [];

		while(amount--) {
			const color = new Color();
			color.render(this.node, speed);
			this.elements.push(color);
		}
	}
}