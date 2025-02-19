import Color from './Color.js';


export default class Colors {
	constructor(node) {
		this.node = node;
		this.elements = [];
	}

	run(speeds) {
		this.elements.forEach((element, ind) => element.run(speeds[ind]));
	}

	stop() {
		this.elements.forEach(element => element.stop());
	}

	render(speeds, isIsolated) {
		this.elements.forEach(element => element.remove());
		this.elements = [];

		this.elements = speeds.map(speed => {
			const color = new Color();
			color.render(this.node, speed, isIsolated);
			return color;
		});
	}
}