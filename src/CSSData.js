export default class CSSData {
	constructor() {
		this.root = document.documentElement;
		this.transitionTime = this.root.style.getPropertyValue('--timer');
	}

	setTransitionTime(time) {
		this.root.style.setProperty('--timer', `${time}s`);
		this.transitionTime = time;
	}

	setColorWidth(colorAmount) {
		let width = 100;
		if (colorAmount <= 4) width = 50;
		else if (colorAmount <= 16) width = 25;
		else width = 12;
		this.root.style.setProperty('--width', `${width}%`);
	}
}