'use strict';

//import $ from 'jquery';
//var $ = require('jquery');

$(function(){
  $('#login').hover(function(){
    $('#sumaho').addClass("buruburu");
    setTimeout(function(){
      $('#sumaho').removeClass("buruburu");
    },1500);
  });
});
