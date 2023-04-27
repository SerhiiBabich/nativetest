function sleep(i, ms) {
	return new Promise((resolve, reject) => {
		const refreshIntervalId = setInterval(() => {
			console.log(`${i}: is OK`);
		}, 500);

		if (i === 2) {
			setTimeout(() => {
				clearInterval(refreshIntervalId);
				reject();
			}, ms / 2);
		}

		setTimeout(() => {
			clearInterval(refreshIntervalId);
			resolve();
		}, ms);
	});
}

async function demo() {
	const time = 5000;
	await Promise.all([1, 2, 3].map((i) => sleep(i, time))).catch(console.error);

	console.log('Done');
}

demo();
