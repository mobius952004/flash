import passport from "passport";
import { Strategy } from "passport-local";
import {User} from "../../mongoose/scheemas/user.j"






passport.serializeUser((user, done) => {

     console.log("inside seralizwd user")
    console.log(user)
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    console.log("inside deceralized user")
    console.log(id)

    try {
        const finduser = await User.findById(id)
        if (!finduser) throw new Error("user not found")
        done(null, finduser)
    } catch (err) {

        done(err, null)
    }


})

export default passport.use(
    new Strategy( async (username, password, done) => {
        console.log(username)
        console.log(password)
        try {
        const finduser =await User.findOne({username}) 
        if(!finduser) throw new Error("uset not found")
        if(finduser.password!==password) throw new Error("Invalid password")
        done(null,finduser)
        } catch (err) {
            done(err, null)
        }

    })

)