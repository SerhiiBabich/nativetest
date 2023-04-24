// IIFE
const fibonacci = (function () {
	const seq = [1, 1];

	return function (n) {
		console.log(`Called with ${n}`);
		if (seq.length >= n) {
			console.log(`No compute ${n}`);
			return seq.slice(0, n);
		}

		while (seq.length < n) {
			const last = seq[seq.length - 1];
			const prev = seq[seq.length - 2];
			seq.push(last + prev);

			console.log(`pushed ${n}`);
		}

		return seq;
	};
})();

// function fibonacci(n) {
// 	const sequence = [1, 1];

// 	if (n < 2) {
// 		return sequence.slice(0, n);
// 	}

// 	while (sequence.length < n) {
// 		const last = sequence[sequence.length - 1];
// 		const prev = sequence[sequence.length - 2];
// 		sequence.push(last + prev);
// 	}

// 	return sequence;
// }

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
