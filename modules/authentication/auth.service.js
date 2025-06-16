import User from "../user/user.model.js"
import Authetication from "../../shared/utils.js/jwt.uils.js"
import { v4 as uuid } from "uuid";



class AuthServices {

    async usersignup (UserData) {

   const newuser= new User(UserData)

   try {
    const saveduser= await newuser.save()
    console.log("user saved in db")
    
    return saveduser
    }catch(err){
        return err
    }
    }


async userlogin(UserData){



      const user = await User.findOne({ email:UserData.email });  

      if (!user && user.password !== UserData.password) {
         throw new Error({ message: "Invalid Email, or password" });
      }

    //   req.session.user = { id: user._id, username: user.username, email: user.email };

      return ({
        message: "You are logged in",
        user: { id: user._id, username: user.username, email: user.email },
      });
    } 


}





const authServices = new AuthServices

export default authServices