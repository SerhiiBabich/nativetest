const crypto = require("crypto");
const util = require("util");

process.env.UV_THREADPOOL_SIZE = 5;

const start = process.hrtime();

for (let i = 0; i < 55; i++) {
	crypto.pbkdf2("secret", "salt", 1000000, 512, "sha512", (err) => {
		if (err) throw err;

		const end = process.hrtime(start);
		console.log(
			util.format(
				"crypto %d start %d end %d execute %d",
				i,
				end[0],
				end[1],
				end[0] + end[1] / 1e9
			)
		);
	});
}
