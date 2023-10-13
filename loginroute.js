import express, { Router } from 'express'
import { logincontroller } from '../controllers/logincontroller.js'
import { homecontroller } from '../controllers/logincontroller.js'

const router = express.Router()

router.get('/',logincontroller)
router.get('/home',homecontroller)

export default router