const Ejercicio11 = require('./ejercicio11')
const Ejercicio12 = require('./ejercicio12')

const ej11 = new Ejercicio11()
const ej12 = new Ejercicio12()

function init() {
    ej11.reverse('the sky is blue')
    ej12.lengthNoRepeat('abxzbzccdexfbf')
}

init()