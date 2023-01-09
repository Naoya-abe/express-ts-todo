import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

export class PatchTodoRequestDto {
	@IsNumber()
	@IsNotEmpty()
	public todoId: number;

	@IsString()
	@IsNotEmpty()
	public title: string;

	@IsString()
	@IsOptional()
	public details?: string;

	@IsBoolean()
	@IsNotEmpty()
	public isDone: boolean;
}
