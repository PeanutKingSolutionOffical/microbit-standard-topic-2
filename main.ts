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
