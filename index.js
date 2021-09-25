const express = require('express');
const app = express();

const port = 5000;

app.use(express.static(__dirname + '/'));

console.log(`Server started on: localhost:${port}`);

var server = app.listen(port);