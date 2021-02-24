var express = require('express');
var app = express();
var port = 3000;
var hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
})