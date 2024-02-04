function main(){
    var a = "Hello";
    let b = "Bye";
    if(true){
        let a = "Hii";//legal shadowing -> var by let 
        //var b = "Goodbye";//Illegal shadowing ->If shadowing using let variable by var
        console.log(a);
        console.log(b)
    }
    test();
}