// Using require for a NodeJS module known as express
const express = require('express');
const app = express();
const port = 8000;

// First step is to define all the controllers
var homePage = (req, res) => {
    res.send('Hello, I am Ashutosh sharma')
};
var aboutPage = (req, res) => {
    res.sendFile('./github-link.html', { root: __dirname });
};

// In the next step we are defining all the routes
app.get('/', homePage);
app.get('/about', aboutPage);

app.use((req, res) => {
    res.send('Error 404, not found!')
});

// The server will listen to the requests on the port
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
