const colors = require('colors')

const numWords = parseFloat(process.argv[2]) || 3 

const init = async () => {
    const { generate } = await import('random-words')
    const words = generate(numWords)
    console.log(words.join(' '))
    console.log(generate(3))

}
init()


console.log(colors.blue('thisis bleyu'.bgGreen))