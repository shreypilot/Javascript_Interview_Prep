//filter return those element which fulfill the provided criteria

const nums = [1,2,3,4];
const greaterThen = nums.filter((nums,i)=>{
    return nums>5;
})
console.log(greaterThen);