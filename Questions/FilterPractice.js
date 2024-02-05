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


//Do with filter
const details = students.filter((stu) => stu.marks > 60);
console.log(details);