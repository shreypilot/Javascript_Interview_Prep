let students = [
    {
        name:"Piyush",
        rollNumber:31,
        marks:80
    },
    {
        name:"Jenny",
        rollNumber:69,
        marks:80
    },
    {
        name:"Kaushal",
        rollNumber:35,
        marks:80
    },
    {
        name:"DilPreet",
        rollNumber:55,
        marks:80
    }
]
// let names = [];
// for(let i =0;i<students.length;i++){
//     names.push(students[i].name.toUpperCase());
// }

//Do with map 
const names = students.map((stu) => stu.name.toUpperCase());
console.log(names);