const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/src'));

console.log(`Server started on: localhost:${port}`);

app.listen(port);