var express = require('express');
var app = express();
require('shelljs/global');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/volume/change/:value', function (req, res, next) {

  var value = req.params.value + '%';
  exec('amixer -D pulse sset Master ' + value, {silent:true}).stdout;

  console.log('Changed Volume to ' + value);
  res.send('Changed Volume to ' + value);

});


app.listen(9000, function (next) {
  console.log('Example app listening on port 9000!');
});



