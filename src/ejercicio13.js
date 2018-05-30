class Ejercicio13 {
    constructor() {
        const verifyInput = function(beginWord, endWord, listWord) {
            const size = beginWord.length || 0
            let respuesta = true

            if(endWord.length !== size) {
                respuesta = false
            }

            listWord.map(w => {
                if(w.length !== size) {
                    respuesta = false
                }
            })

            return respuesta
        }
        
        const isCandidate = function(beginWord, word) {
            let differences = 0
            Object.keys(beginWord).map(function(key, index) {
                if(beginWord[key]!==word[key])
                    differences++
            })
            return differences === 1 ? true : false
        }

        const exists = function(word, path) {
            if(path.find(w => w === word)) {
                return true
            }
            return false
        }

        const resolveRoutes = function(endWord, listWord, paths) {
            paths.map(p => {
                const size = p.length
                const word = p[size-1]
                const candidates = []
                let flag = false

                listWord.map(w => {
                    if(isCandidate(word, w))
                        candidates.push(w)
                })

                let first = true
                candidates.map(c => {
                    if(p.slice(-1)[0] !== endWord) {
                        if(first) {
                            if(!exists(c,p)) {
                                p.push(c)
                                first = !first
                                flag = true
                            }
                        } else {
                            let copy = p.slice(0,p.length>1?p.length-1:1)
                            copy.push(c)
                            paths.push(copy)
                            flag = true
                        }
                    }
                })

                if(flag) {
                    resolveRoutes(endWord, listWord, paths)
                }
            })
        }

        const bestRoute = function(paths, goal) {
            let best = []

            paths.map(route => {
                if(route.slice(-1)[0] === goal) {
                    if(route.length < best.length || best.length === 0) {
                        best = route
                    }
                }
            })

            return best
        }

        this.happyPath = function(beginWord, endWord, listWord) {
            if(verifyInput(beginWord, endWord, listWord)) {
                const paths = []
                paths.push([beginWord])

                resolveRoutes(endWord, listWord, paths)

                const best = bestRoute(paths, endWord)

                if(best.length > 0) {
                    console.log(`El camino a recorrer mas corto es de ${best.length} items\n${best}`)
                } else {
                    console.log(`No existe una solución`)
                }
            } else {
                console.log('La longitud de las palabras no son correctas')
            }
        }
    }
}

module.exports = Ejercicio13;