import { IsBoolean, isBoolean, IsOptional, IsString } from 'class-validator';

class CreateTodoDto {
	@IsString()
	@IsOptional()
	title?: string;

	@IsString()
	@IsOptional()
	details?: string;

	@IsBoolean()
	@IsOptional()
	isDone?: boolean;
}

export default CreateTodoDto;
