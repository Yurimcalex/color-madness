import Color from './Color.js';


export default class Colors {
	constructor() {
		this.elements = [];
	}

	run(speeds) {
		this.elements.forEach((element, ind) => element.run(speeds[ind]));
	}

	stop() {
		this.elements.forEach(element => element.stop());
	}

	render(speeds) {
		this.elements.forEach(element => element.remove());
		this.elements = [];

		this.elements = speeds.map(speed => {
			const color = new Color();
			color.render(speed);
			return color;
		});
	}
}