import authservices from "./auth.service.js"
import User from "../user/user.model.js"
import { query, validationResult, checkSchema , matchedData,body} from "express-validator";



class AuthController {

      async usersignup(req,res,next){
      const error= validationResult(req)
      const UserData = matchedData(req)
        const{username , password, email} = UserData

      const alreadyexists= await User.findOne({email:UserData.gmail})

      if(alreadyexists) return res.status(401).json("User already exists with this Email")

      if(!error.isEmpty()) return res.status(404).json(error.array().map((er=>er.msg)))
try{
      const  user = await authservices.usersignup(username , password,email, req.headers["user-agent"])
         console.log(user)
        console.log("congratulations u are now logged in ")
        res.status(200).json(user)
}catch(err){
    res.status(401).json(err)
}

next()

      }



 async userlogin(req,res,next){
      

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const UserData = matchedData(req);

    try {

       const result = await authservices.userlogin(UserData)
       res.status(200).send(result)
    }catch(err){

      res.status(401).send("user not found")
    }

 }














}


export default new AuthController();