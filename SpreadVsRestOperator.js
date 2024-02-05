function multiply(...nums){//Rest operator->Used to gather e;ement into an array ->collect things together 
    //->used in fn parameter to collect remaining argument into ann array 
    console.log(nums[0]*nums[1]);
}
var arr = [5,6];
multiply(...arr);//spread operator -> spread thing apart ->spread elemnt frm array 
//->used to spread element from an array into individual