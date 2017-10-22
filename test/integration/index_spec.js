/* eslint-env mocha */

const ArcadeKeys = require('../../index')
const expect = require('expect')

describe('key press is stored', () => {
  it('returns that the key is not pressed', () => {
    let ak = ArcadeKeys()

    expect(ak.isPressed('up')).toBe(false)
  })

  it('returns that the key is pressed', () => {
    let ak = ArcadeKeys()

    simulateKeyPress('keydown')
    expect(ak.isPressed('up')).toBe(true)

    simulateKeyPress('keyup')
    expect(ak.isPressed('up')).toBe(false)
  })
})

describe('on blur', () => {
  it('clears keys', () => {
    let ak = ArcadeKeys()

    simulateKeyPress('keydown')
    expect(ak.isPressed('up')).toBe(true)

    simulateBlur()
    expect(ak.isPressed('up')).toBe(false)
  })
})

function simulateKeyPress (eventType) {
  let e = new window.Event(eventType)

  e.key = 'up'
  document.dispatchEvent(e)
}

function simulateBlur () {
  let e = new window.Event('blur')

  window.dispatchEvent(e)
}
