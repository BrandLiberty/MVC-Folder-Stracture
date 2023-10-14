import express from 'express'
import signup from '../../../controllers/v1/user_signup.js'

const router = express.Router()


router.post('/add',signup)

router.get("/get",(req,res)=>{
    res.send("Good morning")

})

export default router