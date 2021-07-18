const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// route manager
const route_rest = require('./routes/rest');

const expressApp = express();
const httpServer = http.createServer();

expressApp.use(bodyParser.json());
expressApp.use('/api/v1/', route_rest);

httpServer.on('request', expressApp);


// for production
// httpServer.listen();
// console.log(httpServer.address().port);

if (require.main === module) {
	httpServer.listen(3001, () => {
		console.log("top2000 api is running!");
	})
}

module.exports = httpServer;