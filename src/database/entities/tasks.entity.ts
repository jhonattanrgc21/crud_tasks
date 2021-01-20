import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn 
} from 'typeorm';

// ======================================
//          Tasks Entity
// ======================================
@Entity()
export default class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
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