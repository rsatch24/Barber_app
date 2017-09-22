var express = require("express");
 
var app = express();

var routes = require('./routes');
app.use(express.logger());

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', routes.home);

app.get('/LoginPage', routes.Login);

app.get('/SignUpPage', routes.SignUp);

app.get('/Search', routes.Search);



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
