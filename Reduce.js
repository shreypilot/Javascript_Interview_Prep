//Reduce an array to a single value by passing a callback fun to each element of the array 

const nums = [1,2,3,4];
const sum = nums.reduce((acc,curr,i,nums)=>{
    return acc + curr;
},0)
console.log(sum);

//accumulator->result of previous computation