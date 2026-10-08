import express from 'express'
import {createMessage,getMessage} from '../controllers/userController.js'

const router = express.Router();

router.route('/contactus').get(getMessage)
router.route('/contactus').post(createMessage)

export default router;