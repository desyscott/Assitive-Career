import bcrypt from "bcrypt";

const salt = await bcrypt.genSalt();

export const data ={
    
    users:[
        {   
         _id:"168904563219087665",
         profileImage:"/images/mentor1.jpeg",
            name:"Aaron Butler",
            email:"mrfallback055@gmail.com",
            professional:"Affiliate Marketing",
            Location:"Paris",
            career:"Sales",
            role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
          
        },
        {
            _id:"168904563219087667",
            profileImage:"/images/mentor2.jpeg",
            name:"Cynthia Burton",
            email:"desyscott055@gmail.com",
            professional:"Big Data",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
        },
        {   
            _id:"168904563216788766",
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            name:"Clara Gibson",
            email:"desyscott055@gmail.com",
            professional:"Business Planing",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
        },
        {
            _id:"168904353219087665",
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            name:"laura kim",
            email:"desyscott055@gmail.com",
            professional:"Big Data",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
        },
        {
            
            _id:"168904563219087660",
            profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            name:"Louis kennedy",
            email:"desyscott055@gmail.com",
            professional:"Business Planing",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
        },
        {
            _id:"168904563219087661",
             profileImage:"/images/blank-profile-picture-gdfa15e9f3_1280.png",
            name:"Kevin Lawrence",
            email:"desyscott055@gmail.com",
            professional:"Affiliate Marketing",
            Location:"Paris",
           career:"Sales",
           role:"Mentor",
            MentorshipCate:"Leadership",
            Hobbies:["movies","music"] 
        },
          ],
}