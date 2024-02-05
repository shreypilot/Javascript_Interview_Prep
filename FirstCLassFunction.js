//FirstClassFunction -> Function can be treated like variable their function are called first class function

//Inthis case function can be pass into another function ,can be used manipulated and return from those function
//Basically-> do everything which is variable can do 

function square (num){
    return num*num;
}

function displaySquare (fn){
    console.log(" Square is "+fn(5));
}

displaySquare(square);