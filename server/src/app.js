// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// our packages
import {logger} from './util';

// init app
const app = express();

// set up logging
app.use(morgan('combined', {stream: logger.stream}));

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing applicatoin/x-www-form-urlencoded

// test method
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/login', (req, res) => {
	const {username, password} = req.body;

	if (username === 'test' && password === '123') {
		res.send({username, id: 1});
		return;
	}

	res.status(401).send({error: 'Incorrect username or password'});
});

// catch all unhandled errors
app.use((err, req, res) => {
	logger.error(err.stack);
	res.status(500).send(err);
});

export default app;