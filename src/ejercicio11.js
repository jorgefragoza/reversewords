class Ejercicio11 {
    constructor() {
        this.reverse = function(words) {
            const result = words.split(' ').reverse().join(' ')
        
            console.log(`${words} | ${result}`)
        }
    }
}

module.exports = Ejercicio11;