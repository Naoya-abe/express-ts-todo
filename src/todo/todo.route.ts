import express from 'express';
import validationMiddleware from '../middlewares/validation.middleware';
import { CreateTodoRequestDto } from './dto/createTodo.dto';
import { GetTodoRequestDto } from './dto/getTodo.dto';
import { PatchTodoRequestDto } from './dto/patchTodo.dto';
import { DeleteTodoRequestDto } from './dto/deleteTodo.dto';
import todoController from './todo.controller';

const todoRouter = express.Router();

/* POST Method */
todoRouter.post(
	'/',
	validationMiddleware(CreateTodoRequestDto),
	todoController.createTodo
);

/* GET Method */
todoRouter.get('/list', todoController.getTodoList);
todoRouter.get(
	'/',
	validationMiddleware(GetTodoRequestDto),
	todoController.getTodo
);

/* PATCH Method */
todoRouter.patch(
	'/',
	validationMiddleware(PatchTodoRequestDto),
	todoController.patchTodo
);

/* DELETE Method */
todoRouter.delete(
	'/',
	validationMiddleware(DeleteTodoRequestDto),
	todoController.deleteTodo
);

export default todoRouter;
