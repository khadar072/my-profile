import express from 'express'
import { adminLogin } from '../controller/auth.controller.js'
import { getMessages, sendMessages } from '../controller/message.controller.js'
import { userAuth } from '../auth/userauth.js'

const router = express.Router()

router.post('/login',adminLogin)
router.post('/send-messages',sendMessages)
router.get('/get-messages',userAuth,getMessages)


export default router