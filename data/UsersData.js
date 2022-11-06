import bcrypt from "bcrypt";

const salt = await bcrypt.genSalt();

export const data ={
    
    mentorUsers:[
        {   
        
           profileImage:"/images/mentor1.jpeg",
            firstName:"Aaron",
            lastName:"Butler",
            email:"aaronbutler123@gmail.com",
            password:bcrypt.hashSync("desy123",salt),
            mentorVerified:true,
            profession:"Cyber Security Specialist",
            Location:"United State",
            career:"Sales",
            role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
          
        },
        {
        
            profileImage:"/images/mentor4.jpg",
            firstName:"Cynthia ",
            lastName:"Burton",
            email:"cynthiaburton123@gmail.com",
             password:bcrypt.hashSync("desy123",salt),
             mentorVerified:true,
            profession:"Senior Web Developer",
            Location:"Germany",
           career:"Sales",
           role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
        },
        {   
        
            profileImage:"/images/mentor3.jpg",
            firstName:"Leigh",
            lastName:"Felton",
            email:"leighfelton123@gmail.com",
             password:bcrypt.hashSync("desy123",salt),
             mentorVerified:true,
            profession:"Software Architect Manager",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
        },
        {
        
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            firstName:"laura",
            lastName:"kim",
            email:"laurakim123@gmail.com",
             password:bcrypt.hashSync("desy123",salt),
             mentorVerified:true,
            profession:"UX Designer",
            Location:"United State",
           career:"Sales",
           role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
        },
        {
            
        
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            firstName:"Kennedy",
            lastName:"Bari",
            email:"kennedybari123@gmail.com",
             password:bcrypt.hashSync("desy123",salt),
             mentorVerified:false,
            profession:"Data Science Manager",
            Location:"United State,New york",
           career:"Sales",
           role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
        },
        {
        
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            firstName:"Kevin",
            lastName:"Lawrence",
            email:"kevinlawrence123@gmail.com",
            password:bcrypt.hashSync("desy123",salt),
            mentorVerified:false,
            profession:"Mobile App developer",
            Location:"Paris",
            career:"Sales",
            role:"Mentor",
            MentorshipRole:"Leadership",
            Hobbies:["movies"] 
        },
          ],
}