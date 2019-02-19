var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var picture_url = req.user._json.avatar_url || req.user._json.profile_image_url;
  res.render('index', 
    { title: 'Express',
      picture_url: picture_url});
});

module.exports = router;
