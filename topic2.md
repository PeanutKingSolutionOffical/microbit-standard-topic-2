# Topic 2

## Checkpoint - blinking LEDs

Connect the Red and Green LED Module to P0 and P1 respectively. 

| steps | conditions                            | duration |
|-------|---------------------------------------|----------|
| 1     | Red light ON<br>Green light OFF       | 5 sec    |
| 2     | Red light OFF<br>Green light ON       | 5 sec    |
| 3     | Green light blinks<br>ON 1s -> OFF 1s | 6 sec    |

```blocks

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
})

```

## Assessment - traffic lights

Connect the Red, Yellow and Green LED Module to P0, P1 and P2 respectively. 

| steps | conditions                                          | duration |
|-------|-----------------------------------------------------|----------|
| 1     | Red light ON<br>Yellow light OFF<br>Green light OFF | 5 sec    |
| 2     | Red light ON<br>Yellow light ON<br>Green light OFF  | 2 sec    |
| 3     | Red light OFF<br>Yellow light OFF<br>Green light ON | 5 sec    |
| 4     | Red light OFF<br>Yellow light ON<br>Green light OFF | 2 sed    |

```blocks

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
})

```

## Checkpoint - variables

Display an increasing number on the LED screen.

```blocks

let light2 = 5
loops.everyInterval(500, function () {
    light2 = light2 + 1
})
basic.forever(function () {
    basic.showNumber(light2)
})

```

## Assessment - varying brightness of LED

Use analog write to adjust the brightness of a LED

```blocks

let light2 = 0
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        pins.analogWritePin(AnalogPin.P0, light2)
        light2 += 100
        basic.pause(500)
    }
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        pins.analogWritePin(AnalogPin.P0, light2)
        light2 += -100
        basic.pause(500)
    }
})

```