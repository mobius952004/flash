import { Router } from "express";
import { query, validationResult, checkSchema , matchedData,body} from "express-validator";
import authcontroller from "./auth.controller.js";
import { uservalidation } from "../../middleware/validation.schema.js";

const router= Router()


router.post("/user/signup",checkSchema(uservalidation),authcontroller.usersignup)

router.post("/user/login",checkSchema(uservalidation),authcontroller.userlogin)

router.post("/api/user/Log-out",(req,res)=>{
    
})


export default router
