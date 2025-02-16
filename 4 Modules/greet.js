console.log('Hello World')

var greet = function() {
    console.log('Hello Franz')
}

var greetEx = function() {
    console.log('Hello, this is the exported greet function')
}

module.exports = greetEx