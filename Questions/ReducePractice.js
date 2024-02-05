let students = [
    {
        name:"Piyush",
        rollNumber:31,
        marks:60
    },
    {
        name:"Jenny",
        rollNumber:69,
        marks:80
    },
    {
        name:"Kaushal",
        rollNumber:35,
        marks:70
    },
    {
        name:"DilPreet",
        rollNumber:55,
        marks:50
    }
]


//Do with Reduce
const sum = students.reduce((acc,curr) => acc+curr.marks,0);
console.log(sum);