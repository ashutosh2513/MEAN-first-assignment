// Rendering views is a common feature of express which is used to send our data to a template.The ejs module is used to render the template with HTML.

const express = require('express');
const app = express();
const port = 8000;

// It sets the view engine to ejs
app.set('view engine', 'ejs')

// This code segment calls the index.ejs file in the views folder.
app.get('/', (req, res) => {
    res.render('index', {
        title: 'AshutoshSharma', // Any random name entered in the title will be displayed in the website
        name: 'Ashutosh Sharma'
    });
});

// server will listen to the requests
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
