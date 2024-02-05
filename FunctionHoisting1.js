var x = 21;

function functionName(){

    console.log(x);//undefined ->because inside fun var hoisted with undefined it var x not declared inside  function then its value be 21 
    var x = 20;


}

functionName();