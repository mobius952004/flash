import User from "../user/user.model.js"
import jwtservices from "../../shared/utils.js/jwt.uils.js"
import { v4 as uuid } from "uuid";



class AuthServices {

    async usersignup (username,password,email,agent="unknown") {
const hashedpassword= await bcrypt.hash(password,10) // bycrypt cost/salt =10 , standart will make the hashing strong
const newuser=await User.create({username,password:hashedpassword,email})
return issueToken(newuser,agent)
    }


async userlogin(username,password,email,agent="unknown"){



     const user = await User.findOne({ username,email });
     if (!user) throw new Error("User not found");
    const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Wrong password");
  return issueTokens(user, agent);

    } 


}





const authServices = new AuthServices

export default authServices