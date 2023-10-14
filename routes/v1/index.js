import express from 'express'
import user from "./user/index.js"
const router = express.Router()
   

router.use('/signup',user)


export default router