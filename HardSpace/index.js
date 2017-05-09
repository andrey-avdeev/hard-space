const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '', 'index.html')));

app.listen(app.get('port'), () => {
	console.log('\nExpress server up and running at http://localhost:%s.\n', app.get('port'));
});
