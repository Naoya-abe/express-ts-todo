import { Request, Response } from 'express';
import todoModel from '../models/todo.model';

/* POST Method */
const createTodo = async (req: Request, res: Response) => {
	const title: string = req.body.title;
	const details: string | undefined = req.body.details;
	const body = { title, details };
	try {
		res.status(200).json(await todoModel.createTodo(body));
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
const getTodo = async (req: Request, res: Response) => {
	const todoId = Number(req.params.todoId);
	try {
		res.status(200).json(await todoModel.getTodo(todoId));
	} catch (error) {
		console.error('Todoの取得に失敗しました。');
	}
};

/* PATCH Method */
const patchTodo = (req: Request, res: Response) => {
	try {
		res.status(200).json(todoModel.patchTodo());
	} catch (error) {
		console.error('Todoの編集に失敗しました。');
	}
};

/* DELETE Method */
const deleteTodo = (req: Request, res: Response) => {
	try {
		res.status(200).json(todoModel.deleteTodo());
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
