import {Router} from 'express';
import {createTask, deleteTask, editTask, getTasks, getViewCreate, getViewEdit} from '../controller/tasks.controller';

// ======================================
//				Tasks Routes
// ======================================
const router = Router();

router.route('/create').get(getViewCreate).post(createTask);
router.route('/list').get(getTasks);
router.route('/delete/:id').get(deleteTask);
router.route('/edit/:id').get(getViewEdit).post(editTask);

export default router;