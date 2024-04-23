const express = require('express');
const router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const indexController = require('../controllers/index');
// const revController = require('../controllers/reviews');

// route = '/'

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/', // change to user redirect page later
    failureRedirect: '/' // change to failed login redirect page later
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/'); // change to landing page redirect page later
  });
});


/* GET landing page. */
router.get('/', indexController.index);
// router.get('/reviews/new', ensureLoggedIn, revController.new);



module.exports = router;
