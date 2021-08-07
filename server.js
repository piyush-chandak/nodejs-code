const express = require('express');
const app = express();

const PORT_NUMBER = process.env.PORT || 8000;

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server listining to PORT: ${PORT_NUMBER}`);
});

