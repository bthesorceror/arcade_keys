var $         = require('jquery');
var _         = require('underscore');
var FrontDesk = require('frontdesk');

function ArcadeKeys(keys) {
  this.desk = new FrontDesk(1);
}

ArcadeKeys.prototype.isPressed = function(key) {
  return this.desk.isOccupied(key);
}

ArcadeKeys.prototype.press = function(key) {
  this.desk.checkin(key);
}

ArcadeKeys.prototype.release = function(key) {
  this.desk.checkout(key);
}

ArcadeKeys.prototype.clear = function() {
  this.desk.evacuate();
}

function initialize(keys, selector) {
  var ak   = new ArcadeKeys(keys);
  var $el  = $(selector);

  var guard = function(cb) {
    return function(e) {
      if (_.contains(keys, e.keyCode)) {
        e.preventDefault();
        cb(e);
      }
    }
  };

  $el.on('keydown', guard(function(e) {
    ak.press(e.keyCode);
  }));

  $el.on('keyup', guard(function(e) {
    ak.release(e.keyCode);
  }));

  $(window).on('blur', function() {
    ak.clear();
  });

  return ak;
}

initialize.keys = {
  left: 37,
  right: 39,
  up: 38,
  down: 40,
  space: 32
}

module.exports = initialize;
