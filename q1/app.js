
const express = require('express');
const app = express();

// Using app.get('path', callback) command we can only define a single route with a single HTTP verb
app.get('/', (req, res) => {
    res.send('Here is your data');
});
app.post('/', (req, res) => {
    res.send('Data posted successfully')
});

// Using express we can write the same code as
app.route('/').get((req, res) => {
    res.send('Here is your data');
}).post((req, res) => {
    res.send('Data posted successfully');
});

// In this code segment we chain multiple middleware functions
var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    }
    else {
        res.send('What is your name?');
    }
};
var sayHello = function (req, res, next) {
    res.send('Hello' + req.param('name'));
};
// Using multiple middleware functions
app.get('/name', hasName, sayHello); 


app.listen(8000, () => {
    console.log('Server listening on port 8000...');
})
