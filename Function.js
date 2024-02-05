//Function declaration is function definition or statement 

function square1 (nums){
    return num*num;
}

//Function expression ->Store function inside of variable->function with no name 

const square = function(num){
    return num*num;
}
console.log(square(5))//function can be call like a normal function

// function(num){
//     return num*num;
// }-> This is called annonymous function -> function with no name
//it can be assign to variable  or can be passed as callback may be


// function expression and function declaration are same but the difference is that expression is assign to variables