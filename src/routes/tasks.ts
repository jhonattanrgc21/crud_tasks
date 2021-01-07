import {Router, Request, Response, request} from 'express';
import Task from '../models/tasks.model';

const router = Router();

router.route('/create')
    .get((req: Request, res: Response) => {
        res.render('tasks/create');
    })
    .post(async(req: Request, res: Response) => {
        const {title, description} = req.body;
        const newTask = new Task({title, description});
        await newTask.save();
        /* El metodo redirect es para
            cambiar de vista en el front */
        res.redirect('/tasks/list');
    })

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find().lean();

        /* el metodo render es ara enviar 
            datos al Front */
        res.render('tasks/list', {tasks});
    })

router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
       const {id} = req.params;
       await Task.findByIdAndDelete(id);
       res.redirect('/tasks/list');
    })

router.route('/edit/:id')
    .get(async (req: Request, res: Response) => {
       const {id} = req.params;
       const task = await Task.findById(id).lean();
       res.render('tasks/edit', {task});
    })
    .post(async(req: Request, res: Response) => {
        const {id} = req.params;
        const {title, description} = req.body;
        await  Task.findByIdAndUpdate(id, { title, description});
        /* El metodo redirect es para
            cambiar de vista en el front */
        res.redirect('/tasks/list');
    })

export default router;