process.on('message', (message) => {
	if (message === 'disconnect') {
		process.disconnect();
		return;
	}
	console.log(`client got: ${message}`);
	process.send('_PONG_');
});
