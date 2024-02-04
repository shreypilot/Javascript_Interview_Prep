function test() {

    console.log(a);
    
    var a = 10;
    
    console.log(a);
    
    }
    
    test();

    //Output:

//undefined
//10

//Explanation: Within the function test(), a is declared later in the code using var, which means it is hoisted to the top 
//of the function scope. Therefore, the first console.log() statement refers to the hoisted variable, which has not yet been assigned 
//a value, resulting in undefined as the output.
 //The second console.log() statement refers to the value of a after it has been assigned a value of 10, resulting in 10 as the output.