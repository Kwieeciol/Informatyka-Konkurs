const uniform = (min, max) => {return Math.random() * (max + 1 - min) + min}
const randrange = (min, max) => {return Math.round(uniform(min, max))}

function monotonic() {
	let [seconds, nanos] = process.hrtime();
	return seconds * 1000 + nanos / 1000000;
}

class ExponentialBackoff {
	constructor({base=1, integral=false}) {
		this._base = base;

		this._exp = 0;
		this._max = 10;
		this._reset_time = base * 2 ** 11;
		this._last_invocation = monotonic();

		if (integral) {
			this._randfunc = randrange;
		} else {
			this._randfunc = uniform;
		}
	}

	delay() {
		let invocation = monotonic();
		let interval = invocation - this._last_invocation;
		this._last_invocation = invocation;

		if (interval > this._reset_time) {
			this._exp = 0;
		}

		this._exp = Math.min(this._exp + 1, this._max);
		return this._randfunc(0, this._base * 2 ** this._exp);
	}
}


const backoff = new ExponentialBackoff({integral: false});

for (let i = 0; i < 10; i++) {
	console.log(backoff.delay());
}
