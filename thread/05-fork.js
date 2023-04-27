const { fork } = require('child_process');
const forkProcess = fork('./05-fork-exec.js');

forkProcess.on('message', (msg) => {
	console.log(`Got message: ${msg}`);
});

forkProcess.on('close', (code) => {
	console.log(`_Exited: ${code}`);
});

forkProcess.send('__ping');
forkProcess.send('disconnect');
