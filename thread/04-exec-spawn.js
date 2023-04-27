{
	const { exec, spawn } = require('child_process');

	const childProcess = exec('ls', (err, stdout, stderr) => {
		if (err) {
			console.error(err.message);
		}

		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});

	childProcess.on('exit', (code) => {
		console.log(`_exit_code_${code}`);
	});
}

{
	const { spawn } = require('child_process');

	const childProcess = spawn('ls');

	childProcess.stdout.on('data', (data) => {
		console.log(`_spawn_data_${data}`);
	});

	childProcess.stderr.on('data', (data) => {
		console.log(`_spawn_error_${data}`);
	});

	childProcess.on('exit', (code) => {
		console.log(`_exit_code_${code}`);
	});
}
