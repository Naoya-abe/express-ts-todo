import express from 'express';
import validationMiddleware from '../middlewares/validation.middleware';
import CreateTodoDto from './dto/createTodo.dto';
import PatchTodoDto from './dto/patchTodo.dto';
import todoController from './todo.controller';

const todoRouter = express.Router();

/* POST Method */
todoRouter.post(
	'/',
	validationMiddleware(CreateTodoDto),
	todoController.createTodo
);

/* GET Method */
todoRouter.get('/list', todoController.getTodoList);
todoRouter.get('/:todoId', todoController.getTodo);

/* PATCH Method */
todoRouter.patch(
	'/:todoId',
	validationMiddleware(PatchTodoDto),
	todoController.patchTodo
);

/* DELETE Method */
todoRouter.delete('/:todoId', todoController.deleteTodo);

export default todoRouter;
