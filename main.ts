// Magma subiendo por el volcán
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
}
// Erupción del volcán
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . # . #
        . . # . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
}
