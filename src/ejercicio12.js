/**
 * Given a string, find the length of the longest substring without repeating characters.
 * For example, the longest substring without repeating letters for "abcabcbb" is "abc",
 * which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
 */

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