﻿const express = require('express');
const path = require('path');
const translate = require('express-systemjs-translate');

const app = express();

app.set('port', process.env.PORT || 3000);

//app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
//app.use('systemjs.debug.conf.js', express.static(path.join(__dirname + 'systemjs.config.js')));

app.use(express.static(path.join(__dirname, '')));

//app.use(translate('/',
//	{
//		baseUrl: __dirname,
//		configFile: 'systemjs.debug.conf.js'
//	}));
//.use(express.static('/'));

//app.use('/src', express.static(path.join(__dirname, '/src')));
//app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '', 'index.html')));

app.listen(app.get('port'), () => {
	console.log('\nExpress server up and running at http://localhost:%s.\n', app.get('port'));
});
