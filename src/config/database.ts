import { join } from 'path';
import { createConnection, useContainer } from 'typeorm';

// ======================================
//			Connect to DB
// ======================================
export default async function connect() {
	await createConnection({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: process.env.DB_USERNAME || 'tasks_admin',
		password: process.env.DB_PASSWORD || '1234',
		database: process.env.DB_DATABASE || 'tasks',
		synchronize: true,
		entities: [join(__dirname, '../database/entities/**.entity.{ts,js}')],
	})
		.then(() => console.log('Database is Connected'))
		.catch((error) => console.log(error));
}


/*import mongoose from 'mongoose';

async function conect() {
    try{
        await mongoose.connect('mongodb://localhost/task-app',  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('database is conected.');
    }
    catch{
        console.log('Error');
    }
}

export default conect;*/
