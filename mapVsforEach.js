const  arr = [2,5,3,4,7];

const mapResult = arr.map((ar) => {
    return ar + 2;
});//.filter()

// const mapResult = arr.map((ar) => {
//     return ar + 2;
// }).filter();
//you can chain stup in aray 
//With the map() method, we can chain other methods like, reduce(),sort() etc.
const forEachResult = arr.forEach((ar,i) => {
      arr[i] = ar +3
})
//The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 
console.log(mapResult,forEachResult,arr);

//The map() method returns the newly created array according to the provided callback function.

//The forEach() method returns “undefined“.
//forEach modify the original array 