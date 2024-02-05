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


//Return only names of students who scored more than 60
const names = students.filter((stu) => stu.marks > 60).map((stu)=>stu.name);
console.log(names);