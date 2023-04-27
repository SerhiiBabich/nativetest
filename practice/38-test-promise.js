performance.mark('start');
const a = [];

Promise.resolve().then(() => {
	for (let i = 0; i < 100000000; i++) {
		a.push(i * i);
	}
});

console.log('OK', a.length);

performance.mark('end');
console.log(performance.measure('slow', 'start', 'end'));
