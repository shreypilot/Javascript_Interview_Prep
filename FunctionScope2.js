
    for(let i = 0 ;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000);
}


//Every time when this for loop call it create another block scope for this seTimeout function 

//return 0,1,2,3,4


// for(var i = 0 ;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000);
// }
//but instead of var ->it doesnt have a block scope - print -> 55555

//JavaScript has function-level scope, but not block-level scope for var.
// That means the variable i used in the console.log(i) statement is the same i declared in the for loop, and it is hoisted to the top
// of the function. When the console.log(i) is executed, it will use the final value of i after the loop has completed its iterations.

//So, when the setTimeout functions are triggered after the specified timeouts, they will all log the final value of i (which is 5) to the console. 
//This is due to the asynchronous nature of setTimeout, causing it to execute after the loop has finished, and at that point, i is equal to 5. 
