import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

export class CreateTodoRequestDto {
	@IsString()
	@IsNotEmpty()
	public title: string;

	@IsString()
	@IsOptional()
	public details?: string;
}
