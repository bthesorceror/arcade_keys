var ArcadeKeys = require('../../index')
var expect = require('expect')

describe('key press is stored', function () {
  it('returns that the key is not pressed', function () {
    var ak = ArcadeKeys()
    expect(ak.isPressed(ArcadeKeys.keys.up)).toBe(false)
  })

  it('retuns that the key is pressed', function () {
    var ak = ArcadeKeys()
    simulateKeyPress('keydown')
    expect(ak.isPressed(ArcadeKeys.keys.up)).toBe(true)
    simulateKeyPress('keyup')
    expect(ak.isPressed(ArcadeKeys.keys.up)).toBe(false)
  })
})

function simulateKeyPress (eventType) {
  var e = new window.Event(eventType)
  e.keyCode = ArcadeKeys.keys.up
  e.which = e.keyCode
  e.altKey = false
  e.ctrlKey = false
  e.shiftKey = false
  e.metaKey = false
  e.bubbles = true
  document.dispatchEvent(e)
}
