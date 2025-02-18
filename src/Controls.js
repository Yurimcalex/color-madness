export default class Controls {
	constructor(transitionSpeed, colorAmount) {
		this.transitionSpeed = transitionSpeed;
		this.colorAmount = colorAmount;
		this.start = document.querySelector('.controls__start');
		this.stop = document.querySelector('.controls__stop');
		this.speed = document.getElementById('transition_speed');
		this.amount = document.getElementById('colors_number');
		this.speed.value = transitionSpeed;
		this.amount.value = colorAmount;
	}

	attachAction(elementName, eventName, handler) {
		this[elementName].addEventListener(eventName, handler);
	}
}