const Ejercicio11 = require('./ejercicio11')
const Ejercicio12 = require('./ejercicio12')
const Ejercicio13 = require('./ejercicio13')

const ej11 = new Ejercicio11()
const ej12 = new Ejercicio12()
const ej13 = new Ejercicio13()

function init() {
    ej11.reverse('the sky is blue')
    ej12.lengthNoRepeat('abxzbzccdexfbf')
    ej13.happyPath('hit', 'cog', ['hot','dit','lot','log','cog'])
}

init()