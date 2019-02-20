var express = require('express');
var router = express.Router();
var authenticationEnsurer = require('./authentication-ensurer');

/* GET home page. */
router.get('/', authenticationEnsurer, function(req, res, next) {
  var picture_url = req.user._json.avatar_url || req.user._json.profile_image_url;
  var data = { title: 'Express',
              user: req.user,
              picture_url: picture_url};
  res.render('index', data);
});

module.exports = router;
