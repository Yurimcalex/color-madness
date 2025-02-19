export default class View {
	constructor(speed, amount) {
		this.colorSpeed = document.getElementById('transition_speed_result');
		this.colorAmount = document.getElementById('colors_number_result');
		this.updateText('colorAmount', `${amount}`);
		this.updateText('colorSpeed', `${speed}s`);
	}

	updateText(elementName, newText) {
		this[elementName].textContent = newText;
	}
}