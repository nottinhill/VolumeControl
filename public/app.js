var express = require('express');
var app = express();
require('shelljs/global');


app.get('/volume/change/:value', function (req, res) {
  var value = req.params.value + '%';
  exec('amixer -D pulse sset Master ' + value, {silent:true}).stdout;
  res.send('Change Volume to ' + value);
});


app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
