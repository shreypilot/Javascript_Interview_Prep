function test(){
    let a="Hello";
    if(true){
        let a = "Hi";
        console.log(a);
    }
    console.log(a);//Hello will be print because a is defined with let keyword and let cant be to access  from outside of block scope
}
test();