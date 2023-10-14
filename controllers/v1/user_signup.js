import bcrypt from "bcrypt"

import User from "../../models/user_signup.js"
import mailer from "../../mailers/auth/sign_up.js"




    const signup =async(req,res)=>{
        console.log(req.body) 
        const saltRounds = 10;
    
        try {
            console.log(req.body)
        
                var { name, email, phone,password } = req.body
            
                
                if (!email) {
                    console.log('LOG : Email not found')
                    return res.status(400).json({
                        message: "Email is required"
                    })
                }
                let data=await User.find({email:email})
                if(data.length===0){

                    const salt = bcrypt.genSaltSync(saltRounds);
                     password = bcrypt.hashSync(password, saltRounds);
    
                    User.create({ name, email, phone, password})
                    .then(user => {
                        console.log('INFO : User Created Successfully')
                        mailer(user)
                        return res.status(200).json({
                            message: 'Contact Created Successfully',
                            data: user
                        })
                    })
                    .catch(err => {
                        console.log('ERROR : Unable to create user', err)
                        return res.status(500).json({
                            message: "Internal srver error"
                        })
                    })
    
                }
                else{
                    console.log("email is used before")
                        return res.status(200).json({
                            message: "This email is used before enter another email "
                        })
    
                }
        
                
            } catch (error) {
                console.log('ERROR : ', error)
                return res.status(500).json({
                    message: "Internal server error"
                })
            }
        
        }

    
    
    
    
    export default signup