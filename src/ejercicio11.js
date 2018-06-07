/**
 * Given an input string, reverse the string word by word.
 * For example, given s = "the sky is blue", return "blue is sky the". 
 */

class Ejercicio11 {
    constructor() {
        this.reverse = function(words) {
            const result = words.split(' ').reverse().join(' ')
        
            console.log(`${words} | ${result}`)
        }
    }
}

module.exports = Ejercicio11;