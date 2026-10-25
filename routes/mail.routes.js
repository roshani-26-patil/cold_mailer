import express from 'express'
import { deleteEmail, generateEmails, getMyEmails, sendMail, updateEmail } from '../controller/mail.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
const router = express.Router();
 router.post('/generate',authMiddleware,generateEmails);
 router.get('/:id',authMiddleware,getMyEmails);
 router.get('/:id',authMiddleware,updateEmail);
 router.get('/:id',authMiddleware,deleteEmail);
 router.post('/send',authMiddleware,sendMail);

 export default router;
