import express from 'express';
import User from './user/controller';
import Candidate from './candidate/controller';
import adminRequired from './middlewares';
const router = express.Router();



router.get('/', (req,res) => res.send('Hello world'))
router.post('/signup',User.signup)
router.post('/login', User.login)
router.get('/user/:jwt', User.profile)
router.post('/candidate', Candidate.create )
router.get('/candidate/all/:jwt', Candidate.showAll )


export default router;