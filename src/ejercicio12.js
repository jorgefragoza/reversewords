class Ejercicio12 {
    constructor() {
        this.lengthNoRepeat = function(word) {
            let result = []
        
            Object.keys(word).map(function(key, index) {
                if(!result.find(r => r === word[key])) {
                    result.push(word[key])
                }
            })
        
            console.log(`El número de caracteres no repetidos en la cadena ${word} es ${result.length}`)
        }
    }
}

module.exports = Ejercicio12;