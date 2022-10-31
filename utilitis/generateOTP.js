
export const generateOTP = () =>{
    let otp = ''
   for(let i = 0; i<=4; i++){
       const randVal = Math.round(Math.random() * 9)
       otp = otp + randVal;
   }
   
   return otp;
}


