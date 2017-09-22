var barbersJSON = require('../barbers.json');

exports.home = function(request, response) {
  response.render('../views/index.html')
};


exports.Login =  function(request, response){
	response.render('../views/LoginPage.html')
};


exports.SignUp =  function(request, response){
	response.render('../views/SignUpPage.html')
};

exports.Search = function(request, response){
	
	response.render('../views/Search.html')
};
