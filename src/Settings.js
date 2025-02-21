import { randomInt } from './generateColor.js';


export default class Settings {
	constructor(speed, amount) {
		this.speed = speed;
		this.amount = amount;
		this.speeds = [];
		this.isRandomSpeed = false;
		this.pattern = 'linear';
		this.updateSpeeds();
	}

	updateSpeeds() {
		const newSpeeds = [];
		let counter = this.amount;
		while (counter--) {
			if (this.isRandomSpeed) newSpeeds.push(randomInt(1, 30) / 10);
			else newSpeeds.push(this.speed);
		}
		this.speeds = newSpeeds;
	}

	setValue(prop, value) {
		this[prop] = value;
		this.updateSpeeds();
	}
}