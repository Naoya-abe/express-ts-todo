"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const todoRouter = express_1.default.Router();
/* POST Method */
todoRouter.post('/', todo_controller_1.default.createTodo);
/* GET Method */
todoRouter.get('/list', todo_controller_1.default.getTodoList);
todoRouter.get('/:todoId', todo_controller_1.default.getTodo);
/* PATCH Method */
todoRouter.patch('/:todoId', todo_controller_1.default.patchTodo);
/* DELETE Method */
todoRouter.delete('/:todoId', todo_controller_1.default.deleteTodo);
exports.default = todoRouter;
