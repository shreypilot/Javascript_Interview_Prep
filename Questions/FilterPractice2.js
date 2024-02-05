let students = [
    {
        name:"Piyush",
        rollNumber:14,
        marks:60
    },
    {
        name:"Jenny",
        rollNumber:16,
        marks:80
    },
    {
        name:"Kaushal",
        rollNumber:12,
        marks:70
    },
    {
        name:"DilPreet",
        rollNumber:55,
        marks:50
    }
]


//Do with filter
const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber>15);
console.log(details);