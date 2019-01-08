const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/weather', (req, res) => {
  request("http://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&APPID=f16eed3c3855a58355e9745081ed7e4c", (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.send(body);
      }
    })
});

app.post('/api/location', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`);
});
