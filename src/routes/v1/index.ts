import express from 'express';
import authRouter from './authRoutes';
import userRouter from './userRoutes';
import projectRouter from './projectRoutes';
import taskRouter from './taskRoutes';

const router  = express.Router();

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/project',projectRouter)
router.use('/task',taskRouter)

export default router;