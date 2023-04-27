const sell = (nums = []) => {
	let maxDiff;
	for (let i = 0; i < nums.length - 1; i++) {
		const diff = Math.max(...nums.slice(i + 1)) - nums[i];
		if (!diff || diff > maxDiff) {
			maxDiff = diff;
		}
	}

	return maxDiff;
};

const randomArray = (length, max) =>
	[...new Array(length)].map(() => Math.round(Math.random() * max));

performance.mark('sell start');
console.log(sell(randomArray(5000, 100)));
performance.mark('sell end');
console.log(performance.measure('sell', 'sell start', 'sell end'));
