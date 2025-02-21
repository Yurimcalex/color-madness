export default class Effect {
	constructor() {
		this.resets = [];
	};


	scaling(element) {
		const node = element.element;
		let ratio = 1;
		let flag = true;

		setTimeout(() => {
			node.style.transform = 'scale(0.9)';
		}, node.speed + 100);

		return () => {
			node.style.transform = `scale(${ratio})`;
			if (flag) {
				ratio = 1;
			} else {
				ratio = 0.9;
			}
			flag = !flag;
		};
	}


	run(effects, elements) {
		this.stop();
		const availableEffects = effects.filter(effect => this[effect]);

		elements.forEach(element => {
			const node = element.element;
			const handlers = availableEffects.map(effect => this[effect](element));
			const handler = () => handlers.forEach(f => f());
			node.addEventListener('transitionend', handler);
			this.resets.push(() => node.removeEventListener('transitionend', handler));
		});
	}


	stop() {
		this.resets.forEach(reset => reset());
	}
}