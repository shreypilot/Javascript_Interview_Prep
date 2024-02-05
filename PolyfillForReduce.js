//reduce((acc,curr,i,nums)=>{},initialValue)
//if failed to give  tor forget to give initial value  accumulator takes first elent of array as the initial value
Array.prototype.myReduce = function(cb,initialValue) {
    var accumulator = initialValue;
    for(let i = 0; i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
    };
    
    const nums = [1,2,3,4];
    const sum = nums.myReduce((acc,curr)=>{
        return acc + curr;
    },0)
    console.log(sum);