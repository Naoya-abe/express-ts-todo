"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../models/todo.model"));
/* POST Method */
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const details = req.body.details;
    const body = { title, details };
    try {
        res.status(200).json(yield todo_model_1.default.createTodo(body));
    }
    catch (error) {
        console.error('Todoの作成に失敗しました。');
    }
});
/* GET Method */
const getTodoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield todo_model_1.default.getTodoList());
    }
    catch (error) {
        console.error('Todo一覧の取得に失敗しました。');
    }
});
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = Number(req.params.todoId);
    try {
        res.status(200).json(yield todo_model_1.default.getTodo(todoId));
    }
    catch (error) {
        console.error('Todoの取得に失敗しました。');
    }
});
/* PATCH Method */
const patchTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = Number(req.params.todoId);
    const title = req.body.title;
    const details = req.body.details;
    const body = { title, details };
    try {
        res.status(200).json(yield todo_model_1.default.patchTodo(todoId, body));
    }
    catch (error) {
        console.error('Todoの編集に失敗しました。');
    }
});
/* DELETE Method */
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = Number(req.params.todoId);
    try {
        res.status(200).json(yield todo_model_1.default.deleteTodo(todoId));
    }
    catch (error) {
        console.error('Todoの削除に失敗しました。');
    }
});
const todoController = {
    createTodo,
    getTodoList,
    getTodo,
    patchTodo,
    deleteTodo
};
exports.default = todoController;
