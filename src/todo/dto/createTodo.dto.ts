import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateTodoDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsOptional()
	details?: string;
}

export default CreateTodoDto;
