
var config = require('./config.json');
console.log(config);
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var chatroomModule = require('./app/lib/chatroom.js');
chatroomModule.setDirectory('./app/data');
var counter = 1;

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyparser.json());

app.get('/', function (req,res){
  res.render('index', {name: 'NAME'});
});

app.use('/chatrooms', require('./app/routes/chatrooms.js'));
app.use('/users', require('./app/routes/users.js'));




app.get('/greet/:name', function(req, res){
  var name = req.params.name.toLowerCase();

  name=name[0].toUpperCase()+ name.slice(1);
  res.render('index', {name: name});

  // response.json({message: "Hello, " + name });
});


// app.get('/add/:x/:y', function(request, response){
//   var x = request.params.x;
//   var y = request.params.y;

//   response.json({answer: x + y});
// })





// app.post('/', function (req, res){
//   response.send({"message": "Hello, World!"});
// });

var server = app.listen(config.port, displayServerInfo);


function displayServerInfo(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://'+ host + ':' + port);


}