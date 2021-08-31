import express from 'express';
import * as classManager from './class.manager';

const router = express.Router();

router.post('/', classManager.postClass);
router.get('/', classManager.getClass);
router.get('/:classId', classManager.getClassByClassID);
router.delete('/:classId', classManager.deleteClass);
router.patch('/name/:classId', classManager.updateClassName);
router.patch('/starttime/:classId', classManager.updateStartTime);
router.patch('/endtime/:classId', classManager.updateEndTime);

export default router;
