//Hoisting is a JavaScript mechanism where variables and 
//function declarations are moved to the top of their respective 
//scopes before the code is executed.


//Variable hoisting is when the declaration of a variable is moved to the top of its scope,
// whereas function hoisting is when the entire function, including its body, is moved to the top of its scope.


var a = 5;

(function() {

console.log(a);
//When console.log(a) is encountered inside the main function, it refers to the local variable
// a declared inside the function, not the global one. However, at that point in the function, the local variable
// a has been declared but not yet assigned a value, so it holds the value undefined. Therefore, console.log(a) will output undefined.

var a = 10;

})();


//The local variable a inside the main function "shadows" the global variable a
// This means that within the function, the local variable takes precedence, and any reference to a refers to the local one.

//-> matlab phela creation phase bana ushme  varaible or function declared hua but initialized  nhi hua lekin jab function call hoga toh variable initialized 
//ho jayega then function ke andar jo hai ushka alag se creation phase banega then phele saare creation phase mein declared ho jayege then execution phase mein 
// initialized hoge hoga or a late se declared hoga thats why its value is undefined 

//This code creates a new function and immediately calls it. Within the function, a is declared later 
//in the code using var, which means it is hoisted to the top of the function scope. Therefore, the console.log() 
//statement refers to the hoisted variable, which has not yet been assigned a value, resulting in undefined as the output.