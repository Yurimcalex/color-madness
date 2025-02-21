import generateColor from './generateColor.js';


export default class Effect {
	constructor() {
		this.resets = [];
		this.defaultEffect = 'backgrounding';
	};

	backgrounding(element) {
		const node = element.element;
		setTimeout(() => {
			node.style.background = `${generateColor()}`;
		}, node.speed + 100);
		return () => {
			node.style.background = `${generateColor()}`;
		};
	}

	scaling(element) {
		const node = element.element;
		setTimeout(() => {
			node.classList.toggle('color__scale');
		}, node.speed + 100);
		return () => {
			node.classList.toggle('color__scale');
		};
	}

	run(effects, elements) {
		this.stop();
		const availableEffects = effects.filter(effect => this[effect]);
		availableEffects.push(this.defaultEffect);


		elements.forEach(element => {
			const node = element.element;
			const handlers = availableEffects.map(effect => this[effect](element));
			const handler = (e) => {
				if (e.propertyName === 'background-color') handlers.forEach(f => f())
			};

			node.addEventListener('transitionend', handler);
			this.resets.push(() => node.removeEventListener('transitionend', handler));
		});
	}

	stop() {
		this.resets.forEach(reset => reset());
	}
}