import mongoose from 'mongoose';

async function conect() {
    try{
        await mongoose.connect('mongodb://localhost/task-app',  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('>>> database conected.');
    }
    catch{
        console.log('Error');
    }
}

export default conect;