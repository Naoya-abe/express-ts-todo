import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

export class DeleteTodoRequestDto {
	@IsNumber()
	@IsNotEmpty()
	public todoId: number;
}
