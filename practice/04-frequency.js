function highestFrequency(array) {
	const map = {};
	let maxFreq = 0;
	let maxFreqStr = array[0];

	for (let i = 0; i < array.length; i++) {
		const current = array[0];
		if (map[current]) {
			map[current]++;
		} else {
			map[current] = 1;
		}

		if (map[current] > maxFreq) {
			maxFreq = map[current];
			maxFreqStr = current;
		}
	}

	return maxFreq;
}
console.log(['a', 'b', 'c', 'd', 'a', 'e']); // a
console.log(['abs', 'b', 's', 'a', 'a', 'abs', 'abs', 'c']); // abs
