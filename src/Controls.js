export default class Controls {
	constructor(transitionSpeed, colorAmount) {
		this.transitionSpeed = transitionSpeed;
		this.colorAmount = colorAmount;
		this.start = document.querySelector('.controls__start');
		this.stop = document.querySelector('.controls__stop');
		this.speed = document.getElementById('transition_speed');
		this.amount = document.getElementById('colors_number');
		this.open = document.querySelector('.controls__opener');
		this.randomSpeed = document.getElementById('transition_speed_random');
		this.pattern = document.querySelector('.radio');
		this.effect = document.querySelector('.effect');
		this.speed.value = transitionSpeed;
		this.amount.value = colorAmount;
		this.randomSpeed.checked = false;
		document.getElementById('linear_pattern').checked = true;
		document.getElementById('scaling_effect').checked = false;
		document.getElementById('rotating_effect').checked = false;
	}

	attachAction(elementName, eventName, handler) {
		this[elementName].addEventListener(eventName, handler);
	}
}