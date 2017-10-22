## Arcade Keys
Arcade Keys is a module to provide keypress tracking for gameplay.

### Usage
```javascript

  let el = document.querySelector('canvas')

  let arcadeKeys = ArcadeKeys(el)
  
  if (arcadeKeys.isPressed('up')) {
    alert('You pressed up!')
  }
```

### Tests
Test are written using mocha/expect and run via karma.

To run the tests:

```
  npm test
```
