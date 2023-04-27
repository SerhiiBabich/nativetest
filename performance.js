const perfHooks = require('perf_hooks');

slow2 = perfHooks.performance.timerify(slow2);

const performanceObserver = new perfHooks.PerformanceObserver(
	(items, observer) => {
		console.log(items.getEntries());
		const entry = items.getEntriesByName('slow').pop();
		console.log('>1>', `${entry.name}: ${entry.duration}`);
		observer.disconnect();
	}
);

performanceObserver.observe({
	entryTypes: ['measure', 'function'],
});

function slow2() {
	const arr = [];
	for (let i = 0; i < 100000000; i++) {
		arr.push(i + 1);
	}
}

function slow() {
	performance.mark('start');
	const arr = [];
	for (let i = 0; i < 100000000; i++) {
		arr.push(i + 1);
	}

	performance.mark('end');
	performance.measure('slow', 'start', 'end');
}

slow();
slow2();
