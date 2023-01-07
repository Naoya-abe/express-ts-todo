import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateTodoDto {
	@IsString()
	@IsNotEmpty()
	public title: string;

	@IsString()
	@IsOptional()
	public details?: string;
}

export default CreateTodoDto;
