import express from 'express';
import * as trainerManager from './trainer.manager';

const router = express.Router();

router.post('/', trainerManager.postTrainer);
router.get('/', trainerManager.getAllTrainer);
router.get('/:trainerId', trainerManager.getTrainerByUserID);
router.delete('/:trainerId', trainerManager.deleteTrainer);
router.patch('/age/:trainerId', trainerManager.updateAge);
router.put('/class/:trainerId', trainerManager.putClassInTrainer);
router.delete('/class/:trainerId', trainerManager.deleteClassFromTrainer);

export default router;
