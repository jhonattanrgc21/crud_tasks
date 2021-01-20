import {Request, Response } from 'express';
import {getRepository} from 'typeorm';
import Task from '../database/entities/tasks.entity';

// ======================================
//          Tasks Controller
// ======================================

// Create
export const getViewCreate = (req: Request, res: Response) => {
    return res.render('tasks/create');
}

export const createTask = async (req: Request, res: Response) => {
    const {title, description} = req.body;
    const newTask = getRepository(Task).create(req.body);
    const result = await getRepository(Task).save(newTask);
    /* El metodo redirect es para
    cambiar de vista en el front */
   res.redirect('/tasks/list');
}

// Recuperate
export const getTasks = async (req: Request, res: Response)  => {
     const tasks = await getRepository(Task).find();
     /* el metodo render es ara enviar 
        datos al Front */
    res.render('tasks/list', {tasks});
}


// Uupdate
export const getViewEdit = async (req: Request, res: Response) => {
    const {id} = req.params;
    const task = await getRepository(Task).findOne(id);
    res.render('tasks/edit', {task});
}

export const editTask = async (req: Request, res: Response) => {
    const task = await getRepository(Task).findOne(req.params);
    if(task)
    {
        getRepository(Task).merge(task, req.body);
        await getRepository(Task).save(task);
    }
    /* El metodo redirect es para
        cambiar de vista en el front */
    res.redirect('/tasks/list');
}

// Delete
export const deleteTask = async (req: Request, res: Response) => {
    const {id} = req.params;
    await getRepository(Task).delete(id);
    res.redirect('/tasks/list');
}