import express from "express";
let app = express();

let port = 3000;
let hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening at ${hostname}:${port}/`)
});