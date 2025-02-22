import generateColor from './generateColor.js';


export default class Effect {
	constructor() {
		this.resets = [];
		this.defaultEffect = 'backgrounding';
	};

	backgrounding(node) {
		node.style.background = `${generateColor()}`;
	}

	scaling(node) {
		node.classList.toggle('color__scale');
	}

	rotating(node) {
		node.classList.toggle('color__rotate');
	}


	run(effects, elements) {
		const availableEffects = effects.filter(effect => this[effect]);
		availableEffects.unshift(this.defaultEffect);

		elements.forEach(element => {
			const node = element.element;
			const handlers = availableEffects.map(effect => this[effect]);

			setTimeout(() => {
				handlers.forEach(f => f(node));
			}, element.speed * 1000 + 100);

			const handler = (e) => {
				if (e.propertyName === 'background-color') handlers.forEach(f => f(node))
			};

			node.addEventListener('transitionend', handler);
			this.resets.push(() => node.removeEventListener('transitionend', handler));
		});
	}


	stop() {
		this.resets.forEach(reset => reset());
		this.resets = [];
	}
}