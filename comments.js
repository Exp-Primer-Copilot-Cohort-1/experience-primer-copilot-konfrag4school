// Create web server

// Import modules
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

// Set up view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Set up routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/list', (req, res) => {
    res.render('list');
});

app.post('/create', (req, res) => {
    // Get data from form
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const date = req.body.date;

    // Create new object
    const newComment = {
        title: title,
        content: content
    };
});