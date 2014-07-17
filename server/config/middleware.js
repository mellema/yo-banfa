var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    methodOverrride = require('method-override'),
    helpers     = require('./helpers.js'), // our custom middleware
    app = require('../server.js');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  // var userRouter = express.Router();
  // var linkRouter = express.Router();
  var router = express.Router();
  var userRouter = express.Router();
  var gameRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  //app.use(express.static(__dirname + '/../../www'));

  // Insert routes for various API's
  app.use('/api/card', require('./../api/card'));

  //requests for user data should come from the angular services/factories prefixed with /api/users
  app.use('/api/users', userRouter);

  //requests for game data should come from the angular services/factories prefixed with /api/users
  app.use('/api/games', gameRouter);

  // authentication middleware used to decode token and made available on the request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their perspective route files
  require('../api/users/userRoutes.js')(userRouter);
  require('../api/games/gameRoutes.js')(gameRouter);
};
