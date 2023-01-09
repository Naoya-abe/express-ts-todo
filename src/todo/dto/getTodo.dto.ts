import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

export class GetTodoRequestDto {
	@IsNumber()
	@IsNotEmpty()
	public todoId: number;
}
