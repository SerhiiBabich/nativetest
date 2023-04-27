const wt = require('worker_threads');

let res = 0;
for (i = 1; i < 20000; i++) {
	for (j = 1; j < 20000; j++) {
		let n = i % j;
		res += n * (Math.random() > 0.5 ? 1 : -1);
	}
}

wt.parentPort.postMessage(res);
