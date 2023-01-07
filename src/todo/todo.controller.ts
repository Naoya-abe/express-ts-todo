import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import NotFoundException from '../exceptions/NotFoundException';
import todoModel from './todo.model';

/* POST Method */
const createTodo = async (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);

	const title: string = req.body.title;
	const details: string | undefined = req.body.details;
	const body = { title, details };
	try {
		res.status(201).json(await todoModel.createTodo(body));
	} catch (error) {
		next(error);
	}
};

/* GET Method */
const getTodoList = async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.status(200).json(await todoModel.getTodoList());
	} catch (error) {
		next(error);
	}
};
const getTodo = async (req: Request, res: Response, next: NextFunction) => {
	const todoId = Number(req.params.todoId);
	try {
		const todo = await todoModel.getTodo(todoId);
		if (todo) {
			res.status(200).json(todo);
		} else {
			throw new NotFoundException(todoId);
		}
	} catch (error) {
		next(error);
	}
};

/* PATCH Method */
const patchTodo = async (req: Request, res: Response, next: NextFunction) => {
	const todoId = Number(req.params.todoId);
	const title: string | undefined = req.body.title;
	const details: string | undefined = req.body.details;
	const isDone: boolean | undefined = req.body.isDone;
	const body = { title, details, isDone };
	try {
		const todo = await todoModel.patchTodo(todoId, body);
		res.status(200).json(todo);
	} catch (error: any) {
		if (error.code === 'P2025') {
			next(new NotFoundException(todoId));
		} else {
			next(new HttpException(500, 'Something went wrong.'));
		}
	}
};

/* DELETE Method */
const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
	const todoId = Number(req.params.todoId);
	try {
		const response = await todoModel.deleteTodo(todoId);
		res.status(200).json(response);
	} catch (error: any) {
		if (error.code === 'P2025') {
			next(new NotFoundException(todoId));
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
