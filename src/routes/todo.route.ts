import express from 'express';
import todoController from '../controllers/todo.controller';

const todoRouter = express.Router();

/* POST Method */
todoRouter.post('/', todoController.createTodo);

/* GET Method */
todoRouter.get('/list', todoController.getTodoList);
todoRouter.get('/:todoId', todoController.getTodo);

/* PATCH Method */
todoRouter.patch('/:todoId', todoController.patchTodo);

/* DELETE Method */
todoRouter.delete('/:todoId', todoController.deleteTodo);

export default todoRouter;
