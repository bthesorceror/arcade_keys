## Arcade Keys
Arcade Keys is a module to provide keypress tracking for gameplay.

### Usage
```javascript

  let arcadeKeys = ArcadeKeys('canvas', [
    ArcadeKeys.keys.up,
    ArcadeKeys.keys.down,
    ArcadeKeys.keys.left,
    ArcadeKeys.keys.right
  ])
  
  if (arcadeKeys.isPressed(ArcadeKeys.keys.up)) {
    alert('You pressed up!')
  }
```
### Tests
Test are written using mocha/expect and run via karma.

To run the tests:

```
  npm test
```
