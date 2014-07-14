//require server.js
var app = require('./server/server.js');

//Set up our port
var port = process.env.PORT || 9000;

//Listen on port and log status
app.listen(port);
console.log("Express server listening at localhost:"+ port);
