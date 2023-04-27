const http = require('http');
const wt = require('worker_threads');
let result = 0;

const server = http.createServer(function (request, response) {
	switch (request.url) {
		case '/':
			mainPage(request, response);
			break;
		case '/calc':
			calcPage(request, response);
			break;
		default:
			response.writeHead(404);
			response.end('Page not found');
	}
});

function mainPage(request, response) {
	response.end(
		JSON.stringify({
			result,
		})
	);
}

function calcPage(request, response) {
	let worker = new wt.Worker('./02-sub.js');
	worker.on('message', (value) => {
		result = value;

		response.end(JSON.stringify({ result }));
	});
}

server.listen(1234);
