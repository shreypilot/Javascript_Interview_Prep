function test() {

    console.log(a);
    
    let a = 10;//same for let and const ->Cannot access 'a' before initialization
    
    console.log(a);
    
    }
    
    test();



    //->Let or const variable is HOisted but at script which is inside Temproral dead zone 
    //Temproral dead zone where variable are in the scope but not yet  declared 

    