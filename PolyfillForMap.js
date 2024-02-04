Array.prototype.myMap = function(cb) {
let temp = [];
for(let i = 0; i<this.length;i++){
    temp.push(cb(this[i],i,this));
}
return temp;
};

const nums = [1,2,3,4];
const multiplyThree = nums.myMap((nums,i,arr)=>{
    return nums*3+i;
})
console.log(multiplyThree);
//nums-current element i- index, arr-array
//Prototype adding mymap function to the method of array

//create from scratch it means their polyfills->create map function from scratch 