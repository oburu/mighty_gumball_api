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
  {"name":"CALIFORNIA CITY","time":1491896624772,"sales":6,"longitude":"-117.885359","latitude":"+35.187133"},
  {"name":"SAN LUCAS","time":1491897883808,"sales":1,"longitude":"-121.290346","latitude":"+36.457423"},
  {"name":"PASADENA","time":1491897886599,"sales":5,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"CONCORD","time":1491897899419,"sales":1,"longitude":"-121.955399","latitude":"+37.777208"},
  {"name":"VOLCANO","time":1491897901945,"sales":3,"longitude":"-120.706876","latitude":"+38.447270"},
  {"name":"SAN DIEGO","time":1491897910267,"sales":7,"longitude":"-116.846046","latitude":"+33.016928"},
  {"name":"REDWOOD CITY","time":1491897913715,"sales":2,"longitude":"-122.212846","latitude":"+37.490387"},
  {"name":"COACHELLA","time":1491897927505,"sales":5,"longitude":"-116.143588","latitude":"+33.646405"},
  {"name":"TECOPA","time":1491897930880,"sales":4,"longitude":"-117.218616","latitude":"+36.626033"},
  {"name":"IRVINE","time":1491897943861,"sales":6,"longitude":"-117.790059","latitude":"+33.690475"},
  {"name":"SAN CARLOS","time":1491897948052,"sales":1,"longitude":"-122.298150","latitude":"+37.498586"},
  {"name":"MORRO BAY","time":1491897969940,"sales":3,"longitude":"-120.455345","latitude":"+35.347065"},
  {"name":"SAUSALITO","time":1491897974051,"sales":5,"longitude":"-122.740988","latitude":"+38.068036"},
  {"name":"SAN DIEGO","time":1491897989625,"sales":6,"longitude":"-116.846046","latitude":"+33.016928"},
  {"name":"MOUNT LAGUNA","time":1491897991626,"sales":4,"longitude":"-116.846046","latitude":"+33.016928"},
  {"name":"INGLEWOOD","time":1491898000467,"sales":9,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"NOVATO","time":1491898006330,"sales":3,"longitude":"-122.568442","latitude":"+38.117269"},
  {"name":"NORWALK","time":1491898017417,"sales":1,"longitude":"-118.076549","latitude":"+33.906763"},
  {"name":"IRVINE","time":1491898019787,"sales":2,"longitude":"-117.790059","latitude":"+33.690475"},
  {"name":"PASADENA","time":1491898051140,"sales":4,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"CANYONDAM","time":1491898055198,"sales":9,"longitude":"-121.120635","latitude":"+40.211176"},
  {"name":"HERMOSA BEACH","time":1491898077329,"sales":2,"longitude":"-118.298662","latitude":"+33.786594"},
  {"name":"TUSTIN","time":1491898080795,"sales":5,"longitude":"-117.769442","latitude":"+33.640302"},
  {"name":"SACRAMENTO","time":1491898091173,"sales":9,"longitude":"-121.444429","latitude":"+38.377411"},
  {"name":"SIMI VALLEY","time":1491898096853,"sales":7,"longitude":"-118.820330","latitude":"+34.292301"},
  {"name":"BAKERSFIELD","time":1491898108387,"sales":4,"longitude":"-118.985984","latitude":"+35.385489"},
  {"name":"GLENDALE","time":1491898110709,"sales":6,"longitude":"-118.298662","latitude":"+33.786594"}
];
console.log('Server is starting');

var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Express server is up on port: ' + PORT);
});

//example for params hello
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
  let index = getRandomArbitrary(0, sales.length);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(sales[index]);
});

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;
