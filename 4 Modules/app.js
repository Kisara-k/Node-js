// This tells the interpreter that we need the greet module. It executes the greet file.
require('./greet')

// A module should not unintentionally affect the code outside it (Self contained). So greet() definition is not added in this scope.
// greet() // ReferenceError

// We have to explicitly make variables (and functions) in a module available. Export greetEx() inside the module.
// greetEx() // Also ReferenceError

var greet = require('./greet')
greet()

// Even though we call require twice, the console log is executed once.

// Object Literal
var person = {
    name: 'Franz',
    age: 22,
    write: function() {
        console.log(this.name + ' is writing')
        // 'this' points to the person object
        // you will always have access to 'this' at any point in running js, it will refer to different things
        // can see 'this' in the debug console, under Local variables
    }
}

person.write()