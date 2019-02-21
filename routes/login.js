'use strict';
const express = require('express');
const router = express.Router();
//import $ from 'jquery';
//var $ = require('jquery');

router.get('/', (req, res, next) => {
  res.render('login', { user: req.user });
  //console.log(req.user);
});

// (function(){
//   $("a").hover(function(){
//     $("this").addClass("buruburu");
//   })
// })();

module.exports = router;