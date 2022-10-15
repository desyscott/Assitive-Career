import bcrypt from "bcrypt";


const salt = await bcrypt.genSalt();

export const data ={
    
    users:[
        {
            name:"Desmond",
            email:"mrfallback055@gmail.com",
            password:bcrypt.hashSync("desy53t3",salt),
            isAdmin:true
        },
        {
            name:"Mike",
            email:"desyscott055@gmail.com",
            password:bcrypt.hashSync("desy3123",salt),
            isAdmin:false
        },
          ],
    
          courses:[
            {
        _id:"1",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"2",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"3",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"4",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"5",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"6",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"7",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"8",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"9",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"10",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"11",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
            },
            {
        _id:"12",
        title:"frontend",
        description:"Step by guid to becoming frontend developer in 2022",
        details:""
        
            },
        ]
}