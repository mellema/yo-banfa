//require server.js
var app = require('./server/server.js');

//Set up our port
// var port = process.env.PORT || 9000;
app.listen(process.env.PORT || 5000, function() {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//Listen on port and log status

