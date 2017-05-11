// npm packages
import express from 'express';

// init app
const app = express();

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing applicatoin/x-www-form-urlencoded

// test method
app.get('/', (req, res) => {
	res.send('Hello world!');
})

// catch all unhandled errors
app.use((err, req, res) => {
	console.error(err.stack);
	res.status(500).send(err);
});

export default app;