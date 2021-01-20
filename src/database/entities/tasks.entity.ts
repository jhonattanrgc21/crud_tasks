import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    Index
} from 'typeorm';

// ======================================
//          Tasks Entity
// ======================================
@Entity('tasks')
export default class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Index('tasks_title_unique', { unique: true })
    @Column({
		type: 'varchar',
		length: 50,
		comment: 'Titulo de la tarea.',
	})
    title: string;

    @Column({
		type: 'text',
		comment: 'Descripcion de la tarea.',
	})
    description: string;
}

/*import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        lowercase: true,
        required: true
    },

    description: {
        type: String,
        lowercase: true,
        required: true
    }
})

export default model('Task', taskSchema);*/