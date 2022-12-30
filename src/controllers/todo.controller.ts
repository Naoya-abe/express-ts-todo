import { Request, Response } from 'express';
import todoModel from '../models/todo.model';

/* POST Method */
const createTodo = (req: Request, res: Response) => {
	try {
		res.status(200).json(todoModel.createTodo());
	} catch (error) {
		console.error('Todoの作成に失敗しました。');
	}
};

/* GET Method */
const getTodoList = (req: Request, res: Response) => {
	try {
		res.status(200).json(todoModel.getTodoList());
	} catch (error) {
		console.error('Todo一覧の取得に失敗しました。');
	}
};
const getTodo = (req: Request, res: Response) => {
	try {
		res.status(200).json(todoModel.getTodo());
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
