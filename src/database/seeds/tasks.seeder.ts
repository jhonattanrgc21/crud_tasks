import { Factory, Seeder } from 'typeorm-seeding';
import Task from '../entities/tasks.entity';

// ======================================
//				Task Seeder
// ======================================
export default class CreateTask implements Seeder {
	// ======================================
	//				Run Seeder
	// ======================================
	public async run(factory: Factory): Promise<any> {
		await factory(Task)().createMany(10);
	}
}