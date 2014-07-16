var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    methodOverrride = require('method-override'),
    helpers     = require('./helpers.js'), // our custom middleware
    app = require('../server.js'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;



module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  // var userRouter = express.Router();
  // var linkRouter = express.Router();
  //
  app.use(passport.initialize());
  passport.use(new FacebookStrategy({
      clientID: 648798351882921,
      clientSecret: 'fd19734e0be95df8f41499bbe345406e',
      //callback should be localhost:9000/authcallback
      callbackURL: "/authcallback"
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {

        // To keep the example simple, the user's Facebook profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Facebook account with a user record in your database,
        // and return that user instead.
        console.log(profile);
        return done(null, profile);
      });
    }
  ));

  var router = express.Router();
  var userRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../www'));

  //Authentication
  var getOauthToken = function(req, res, next){
    var userToken = req.query['oauth_token'];
    var month = 43829;
    //no process.env.SECRET set yet
    var server_token = jwt.sign({id: userId}, process.env.SECRET || "secret", {expiresInMinutes: month});
    res.redirect('?oauth+token=' + server+token + '&userId=' + userId);
  };
  //Routes for authentication
  var fbRouter = express.Router();
  app.use('/', fbRouter);

  fbRouter.use('/auth', passport.authenticate('facebook'));
  //?
  fbRouter.use('/authcallback', passport.authenticate('facebook'));
  fbRouter.use('/authcallback', getOauthToken);




  // Insert routes for various API's
  app.use('/api/card', require('./../api/card'));

  //requests for user info should come from the angular services/factories prefixed with /api/users
  app.use('/api/users', userRouter);

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  // app.use('/', linkRouter); // user link router for link request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their perspective route files
  require('../api/users/userRoutes.js')(userRouter);
  // require('../links/linkRoutes.js')(linkRouter);
};
