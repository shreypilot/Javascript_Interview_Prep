// const functionName = (a,x,...numbers,y) => {
//      console.log(x,y,numbers)
// };

// functionName(5,6,3,7,8,9);

// Throw error -> SyntaxError: Rest parameter must be last formal parameter

const functionName = (a,x,y,...numbers) => {
     console.log(x,y,numbers)//numbers take all remaining arguments
};

functionName(5,6,3,7,8,9);