const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/weather', function(req, res){
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = 'imperial';
  let city = req.body.input;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`

  request(url, function(error, response, body) {
    if (error || response.statusCode !== 200){
      res.send({});
    } else if (!error && response.statusCode === 200) {
      res.send(body);
    }
  })
});

app.get('/', function (req, res) {
  res.send('root')
})
