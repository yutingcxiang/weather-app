const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/weather', function(req, res){
  let apiKey = 'f16eed3c3855a58355e9745081ed7e4c';
  let units = 'imperial';
  let city = req.body.input;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`


  request(url, function(error, response, body) {
    if (error || response.statusCode !== 200){
      console.log(error);
      res.end();
    } else if (!error && response.statusCode === 200) {
      console.log(body);
      if (body) {
        res.send(body);
      }
    }
  })
});

app.get('/weather', function (req, res) {
  res.send("hello")
})
