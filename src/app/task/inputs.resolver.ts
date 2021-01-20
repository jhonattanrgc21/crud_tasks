import { ID, Int, Field, InputType, Float } from 'type-graphql';

// ======================================
//			Created Task Input
// ======================================
@InputType({ description: 'Input For A New/Update Task Entity' })
export class TaskInput {
	@Field(() => String)
	public title?: string;

	@Field(() => String)
	public description?: string;
}