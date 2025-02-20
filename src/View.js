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

	nested(nodes) {
		for (var i = nodes.length - 1; i > -1; i -= 1) {
		  const curr = nodes[i];
		  const next = nodes[i + 1];
		  if (next) {
		  	curr.append(next);
		  }
		  applyStyle(curr, nodes);
		}
		this.container.prepend(nodes[0]);

		function applyStyle(node, nodes) {
			const fullHeight = window.innerHeight;
			const availableHeight = fullHeight - 6 - 6 * nodes.length;
			console.log(fullHeight, availableHeight);
			node.style.display = 'flex';
			node.style.padding = Math.floor((availableHeight / nodes.length) / 2) + 'px';
		}
	}
}