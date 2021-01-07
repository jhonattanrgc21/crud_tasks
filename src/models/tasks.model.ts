import {Schema, model} from 'mongoose';

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

export default model('Task', taskSchema);