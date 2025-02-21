export default class Effect {
	constructor() {
		this.defaultEffect = 'background';
	};

	scaling(elements) {
		elements.forEach(element => {
			const node = element.element;
			let ratio = 1;
			let flag = true;

			node.style.transform = 'scale(1)';
			node.style.transition = `transform ${element.speed}s`;

			setTimeout(() => {
				node.style.transform = 'scale(0.9)';
			}, node.speed + 100);

			node.addEventListener('transitionend', () => {
				node.style.transform = `scale(${ratio})`;
				if (flag) {
					ratio = 0.9;
				} else {
					ratio = 1;
				}
				flag = !flag;
			});
		});
	}

	create(effectName, elements) {
		this[effectName](elements);
	}
}