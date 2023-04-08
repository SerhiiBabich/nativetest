const http = require('http');
let clients = [];

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
	clients.push({ request, response });
	response.end(
		JSON.stringify({
			result,
		})
	);
}

function calcPage(request, response) {
	let worker = new wt.Worker('./sub.js');
	worker.on('message', (value) => {
		result = value;

		response.end(JSON.stringify({ result }));
	});
}

server.listen(1234);
