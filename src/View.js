export default class View {
	constructor(speed, amount) {
		this.container = document.querySelector('.page');
		this.colorSpeed = document.getElementById('transition_speed_result');
		this.colorAmount = document.getElementById('colors_number_result');
		this.updateText('colorAmount', `${amount}`);
		this.updateText('colorSpeed', `${speed}s`);
		this.elements = [];
	}

	updateText(elementName, newText) {
		this[elementName].textContent = newText;
	}

	resetPattern() {
		this.elements.forEach(element => element.element.remove());
	}

	displayPattern(patternName, elements) {
		const nodes = elements.map(element => element.element);
		this.resetPattern();
		this[patternName](nodes);
		this.elements = elements;
	}

	linear(nodes) {
		nodes.forEach(node => this.container.prepend(node));
	}
}