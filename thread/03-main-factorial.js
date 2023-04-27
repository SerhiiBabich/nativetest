const { Worker } = require('worker_threads');

const compute = (array) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./thread/03-worker-calc.js', {
			workerData: {
				array,
			},
		});

		worker.on('message', (msg) => {
			console.log('message from:', worker.threadId);
			resolve(msg);
		});

		worker.on('error', (err) => {
			reject(err);
		});

		worker.on('exit', () => {
			// console.log(`${worker.threadId}: I am done`);
		});
	});
};

const run = async () => {
	performance.mark('start');

	const result = await Promise.all([
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
	]);

	performance.mark('end');
	performance.measure('slow', 'start', 'end');
	console.log(performance.getEntriesByName('slow').pop());
};

run();

// у пользователя наблюдается мода - через день увеличение на 1$, сомневаюсь что беда в пользователе
// 0.75
