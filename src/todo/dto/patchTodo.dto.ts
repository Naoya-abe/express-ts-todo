import { IsBoolean, isBoolean, IsOptional, IsString } from 'class-validator';

class PatchTodoDto {
	@IsString()
	@IsOptional()
	public title?: string;

	@IsString()
	@IsOptional()
	public details?: string;

	@IsBoolean()
	@IsOptional()
	public isDone?: boolean;
}

export default PatchTodoDto;
