const FrontDesk = require('frontdesk')

function press (key) {
  this.desk.checkin(key)
}

function release (key) {
  this.desk.checkout(key)
}

function clear () {
  this.desk.evacuate()
}

function ArcadeKeys () {
  this.desk = new FrontDesk(1)
}

ArcadeKeys.prototype.isPressed = function (key) {
  return this.desk.isOccupied(key)
}

function initialize (el = document) {
  const ak = new ArcadeKeys()

  const guard = (cb) => {
    return function (e) {
      e.preventDefault()
      cb(e)
    }
  }

  el.addEventListener('keydown', guard(function (e) {
    press.call(ak, e.key)
  }))

  el.addEventListener('keyup', guard(function (e) {
    release.call(ak, e.key)
  }))

  window.addEventListener('blur', () => {
    clear.call(ak)
  })

  return ak
}

module.exports = initialize
