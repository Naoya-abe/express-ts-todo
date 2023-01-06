import { NextFunction, Request, Response } from 'express';
import GetNotFoundException from '../exceptions/GetNotFoundException';
import HttpException from '../exceptions/HttpException';
import todoModel from './todo.model';

/* POST Method */
const createTodo = async (req: Request, res: Response) => {
	const title: string = req.body.title;
	const details: string | undefined = req.body.details;
	const body = { title, details };
	try {
		res.status(201).json(await todoModel.createTodo(body));
	} catch (error) {
		console.error('Todoの作成に失敗しました。');
	}
};

/* GET Method */
const getTodoList = async (req: Request, res: Response) => {
	try {
		res.status(200).json(await todoModel.getTodoList());
	} catch (error) {
		console.error('Todo一覧の取得に失敗しました。');
	}
};
const getTodo = async (req: Request, res: Response, next: NextFunction) => {
	const todoId = Number(req.params.todoId);
	try {
		const todo = await todoModel.getTodo(todoId);
		if (todo) {
			res.status(200).json(todo);
		} else {
			throw new GetNotFoundException(todoId);
		}
	} catch (error) {
		next(error);
	}
};

/* PATCH Method */
const patchTodo = async (req: Request, res: Response) => {
	const todoId = Number(req.params.todoId);
	const title: string | undefined = req.body.title;
	const details: string | undefined = req.body.details;
	const isDone: boolean | undefined = req.body.isDone;
	const body = { title, details, isDone };
	try {
		res.status(200).json(await todoModel.patchTodo(todoId, body));
	} catch (error) {
		console.error('Todoの編集に失敗しました。');
	}
};

/* DELETE Method */
const deleteTodo = async (req: Request, res: Response) => {
	const todoId = Number(req.params.todoId);
	try {
		res.status(200).json(await todoModel.deleteTodo(todoId));
	} catch (error) {
		console.error('Todoの削除に失敗しました。');
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
