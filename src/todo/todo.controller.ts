import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import NotFoundException from '../exceptions/NotFoundException';
import { TypedRequestBody } from '../utils/types/TypedRequest';
import { CreateTodoRequestDto } from './dto/createTodo.dto';
import { GetTodoRequestDto } from './dto/getTodo.dto';
import { PatchTodoRequestDto } from './dto/patchTodo.dto';
import { DeleteTodoRequestDto } from './dto/deleteTodo.dto';
import todoModel from './todo.model';
import { Todo } from '@prisma/client';

/* POST Method */
const createTodo = async (
	req: TypedRequestBody<CreateTodoRequestDto>,
	res: Response<Todo>,
	next: NextFunction
) => {
	try {
		res.status(201).json(await todoModel.createTodo(req.body));
	} catch (error) {
		next(error);
	}
};

/* GET Method */
const getTodoList = async (
	req: Request,
	res: Response<Todo[]>,
	next: NextFunction
) => {
	try {
		res.status(200).json(await todoModel.getTodoList());
	} catch (error) {
		next(error);
	}
};

const getTodo = async (
	req: Request<GetTodoRequestDto>,
	res: Response<Todo>,
	next: NextFunction
) => {
	try {
		const todoId = Number(req.params.todoId);
		const todo = await todoModel.getTodo(todoId);
		if (todo) {
			res.status(200).json(todo);
		} else {
			throw new NotFoundException(req.body.todoId);
		}
	} catch (error) {
		next(error);
	}
};

/* PATCH Method */
const patchTodo = async (
	req: TypedRequestBody<PatchTodoRequestDto>,
	res: Response<Todo>,
	next: NextFunction
) => {
	try {
		const todo = await todoModel.patchTodo(req.body);
		res.status(200).json(todo);
	} catch (error: any) {
		if (error.code === 'P2025') {
			next(new NotFoundException(req.body.todoId));
		} else {
			next(new HttpException(500, 'Something went wrong.'));
		}
	}
};

/* DELETE Method */
const deleteTodo = async (
	req: TypedRequestBody<DeleteTodoRequestDto>,
	res: Response<Todo>,
	next: NextFunction
) => {
	try {
		const response = await todoModel.deleteTodo(req.body.todoId);
		res.status(200).json(response);
	} catch (error: any) {
		if (error.code === 'P2025') {
			next(new NotFoundException(req.body.todoId));
		} else {
			next(new HttpException(500, 'Something went wrong.'));
		}
	}
};

const todoController = {
	createTodo,
	getTodoList,
	getTodo,
	patchTodo,
	deleteTodo
};
export default todoController;
