import Color from './Color.js';


export default class Colors {
	constructor() {
		this.elements = [];
	}

	render(speeds) {
		this.elements = [];
		this.elements = speeds.map(speed => {
			const color = new Color();
			color.render(speed);
			return color;
		});
	}
}