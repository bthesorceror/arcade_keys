var FrontDesk = require('frontdesk');

function press(key) {
  this.desk.checkin(key);
}

function release(key) {
  this.desk.checkout(key);
}

function clear() {
  this.desk.evacuate();
}

function ArcadeKeys() {
  this.desk = new FrontDesk(1);
}

ArcadeKeys.prototype.isPressed = function(key) {
  return this.desk.isOccupied(key);
}

function initialize(keys, selector) {
  var ak   = new ArcadeKeys();
  var el  = selector ? document.querySelector(selector) : document;

  var guard = function(cb) {
    return function(e) {
      if (keys.indexOf(e.keyCode) >= 0) {
        e.preventDefault();
        cb(e);
      }
    }
  };

  el.addEventListener('keydown', guard(function(e) {
    press.call(ak, e.keyCode);
  }));

  el.addEventListener('keyup', guard(function(e) {
    release.call(ak, e.keyCode);
  }));

  window.onblur = function() {
    clear.call(ak);
  };

  return ak;
}

initialize.keys = {
  left: 37,
  right: 39,
  up: 38,
  down: 40,
  space: 32,
  w: 87,
  s: 83,
  a: 65,
  d: 68
}

module.exports = initialize;
