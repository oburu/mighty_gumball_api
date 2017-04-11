const sales = [
  {"name":"MOUNT SHASTA","time":1491896394788,"sales":5,"longitude":"-122.473307","latitude":"+41.427158"},
  {"name":"NEWBERRY SPRINGS","time":1491896400767,"sales":1,"longitude":"-115.932613","latitude":"+34.905340"},
  {"name":"SACRAMENTO","time":1491896497578,"sales":1,"longitude":"-121.444429","latitude":"+38.377411"},
  {"name":"WHITTIER","time":1491896500969,"sales":4,"longitude":"-118.036578","latitude":"+33.971839"},
  {"name":"WEST HILLS","time":1491896508123,"sales":2,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"MANTECA","time":1491896514482,"sales":6,"longitude":"-121.227351","latitude":"+37.743327"},
  {"name":"CORONA","time":1491896519568,"sales":8,"longitude":"-116.055617","latitude":"+33.752886"},
  {"name":"MECCA","time":1491896525560,"sales":1,"longitude":"-116.018731","latitude":"+33.545034"},
  {"name":"COTTONWOOD","time":1491896541235,"sales":4,"longitude":"-122.429495","latitude":"+40.439989"},
  {"name":"CORONA","time":1491896543498,"sales":6,"longitude":"-116.055617","latitude":"+33.752886"},
  {"name":"COMPTCHE","time":1491896560171,"sales":6,"longitude":"-123.587610","latitude":"+39.238683"},
  {"name":"LAKESHORE","time":1491896565768,"sales":2,"longitude":"-119.243637","latitude":"+37.167262"},
  {"name":"WEST HILLS","time":1491896573360,"sales":3,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"LAKEWOOD","time":1491896579333,"sales":9,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"KINGSBURG","time":1491896594653,"sales":2,"longitude":"-119.602863","latitude":"+36.524900"},
  {"name":"NORDEN","time":1491896596725,"sales":1,"longitude":"-120.641450","latitude":"+39.265990"},
  {"name":"SAN DIEGO","time":1491896610788,"sales":7,"longitude":"-116.846046","latitude":"+33.016928"},
  {"name":"SAN LORENZO","time":1491896616966,"sales":2,"longitude":"-122.133825","latitude":"+37.681230"},
  {"name":"ARTESIA","time":1491896621795,"sales":7,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"CALIFORNIA CITY","time":1491896624772,"sales":6,"longitude":"-117.885359","latitude":"+35.187133"}
];
console.log('Server is starting');

var express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Listening port:3000')
});

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

app.get('/mighty_gumball_api', (req, res) => {
  let index = getRandomArbitrary(0, sales.length) < 20 ? getRandomArbitrary(0, sales.length) : 0;
  res.send(sales[index]);
});

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;
