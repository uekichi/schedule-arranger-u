var express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');
var authenticationEnsurer = require('./authentication-ensurer');

/* GET home page. */
router.get('/', authenticationEnsurer, function(req, res, next) {
  var picture_url = req.user._json.avatar_url || req.user._json.profile_image_url;
  const title = '予定調整くん';
  if (req.user) {
    Schedule.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['"updatedAt"', 'DESC']]
    }).then((schedules) => {
      res.render('index', {
        title: title,
        user: req.user,
        schedules: schedules,
        picture_url: picture_url
      });
    });
  } else {
    res.render('index', { title: title, user: req.user, picture_url: picture_url });
  }
});

module.exports = router;
