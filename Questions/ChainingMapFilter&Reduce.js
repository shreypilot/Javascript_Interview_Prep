let students = [
    {
        name:"Piyush",
        rollNumber:14,
        marks:80
    },
    {
        name:"Jenny",
        rollNumber:16,
        marks:69
    },
    {
        name:"Kaushal",
        rollNumber:38,
        marks:35
    },
    {
        name:"DilPreet",
        rollNumber:30,
        marks:35
    }
]


//que:-Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60 

const totalMarks = students.map((stu)=>{
    if(stu.marks < 60){
        stu.marks +=20;
    }
    return stu;
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=> acc+curr.marks,0)
console.log(totalMarks)