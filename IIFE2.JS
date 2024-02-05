//IIFE-o/p based questions
(function (x){
    return (function(y){
        console.log(x);//1
    })(2);
})(1);

//Here IIFE  inside IIFE -> IIFE function return IIFE function
//it search x in inner scope if not find then search in parent scope and in parent scope x exist ->THis happen because of closure
//closure-> the ability of function to access  those variable and function which are lexically out of scope 
//closure are created whenever new function is created ->becoz the function have reference to outer scope