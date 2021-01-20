import Faker from 'faker';
import { define } from 'typeorm-seeding';
import Task from '../entities/tasks.entity';

// ======================================
//				Task Factory
// ======================================
define(Task, (faker: typeof Faker) => {
	const task= new Task();
	task.title = faker.lorem.sentence(4);
	task.description = faker.lorem.words(10);
	return task;
});