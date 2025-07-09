import User from "./user.model.js";
import bcrypt from "bcrypt"

class user_services{

 async userprofile(userID){

    // console.log("Searching for user with ID:", userID);
   
    const user = await User.findById(String(userID)).select("-password")
   if(!user){
    const error = new Error("user not found")
    error.status(404)
    throw error
   }
   return user

}
 async changestatus({userID,status}){
   
  const user = await User.findByIdAndUpdate(
    userID,
    { status },
    { new: true }
  ).select("-password");

  return user;

 }

async change_profilepicture({userid,profilepic}){

const user=await User.findByIdAndUpdate(userid,(profilepic),{new:true}).select("-password")

return user
}


async change_password({userid,newpassword,oldpassword}){

const user=User.findById(userid)
if(!user) throw new Error("user not found")

const ismatch= await bcrypt.compare(oldpassword,user.password)
if(!ismatch) throw new Error("password is incorrect") 

const hashed = await bcrypt.hash(newpassword,10)
user.password=hashed

 return { message: "Password updated successfully" }

}


async change_username({userid,newusername}){

    const user= User.findByIdAndUpdate(userid,{username},{new:true}.select("-password"))

    return userc
}











}
export default new user_services()