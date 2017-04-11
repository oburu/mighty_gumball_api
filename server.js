const fs = require('fs');
const data = fs.readFileSync('sales.json');
const sales =  JSON.parse(data);
console.log('Server is starting');

var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Express server is up on port: ' + PORT);
});

app.get('/mighty_gumball_api', (req, res) => {
  let index = getRandomArbitrary(0, sales.length);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(sales[index]);
});

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;








//example for params 
/*
app.get('/search/:flower/:num', (req, res) => {
  let { flower, num } = req.params;
  let reply = '';
  for(let i = 1; i <= num; i++){
    reply += 'I love ' + flower + ', ';
  }
  res.send(reply);
});
*/