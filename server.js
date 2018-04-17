const express = require('express');
const gzip = require('compression');
const request = require('request');
const app = express();
const PORT = process.env.port || 8000

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// gzip
app.use(gzip({
	threshold: 0,
	filter: () => true, // Compress all assets by default
}));

app.get('/', function (req, res) {
	res.render('index');
});

// app.get('/:id', function (req, res) {
// 	const pageContent = getPageContent(req.params.id)
// 	res.render('article', { data: pageContent });
// });


const server = app.listen(PORT, function () {
	console.log('server is running on port 8000');
});
