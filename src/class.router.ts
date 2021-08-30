import express from 'express';
import * as classManager from './class.manager';

const router = express.Router();

router.post('/');
router.get('/', classManager.getClass);
router.get('/:classId', classManager.getClassByClassID);
router.delete('/:classId', classManager.deleteClass);
router.patch('/:classId', classManager.updateClassName);
router.patch('/api/service2/');
router.patch('/api/service2/z');

export default router;
