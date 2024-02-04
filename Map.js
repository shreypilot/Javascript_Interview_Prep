//used for creating a new array from existing array by applying function to each of the element of first arrays

const nums = [1,2,3,4];
const multiplyThree = nums.map((nums,i,arr)=>{
    return nums*3+i;
})
console.log(multiplyThree);