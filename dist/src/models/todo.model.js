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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/* POST Method */
const createTodo = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield prisma.todo.create({
            data: {
                title: body.title,
                details: body.details
            }
        });
        yield prisma.$disconnect();
        return todo;
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
        process.exit(1);
    }
});
/* GET Method */
const getTodoList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoList = yield prisma.todo.findMany();
        yield prisma.$disconnect();
        return todoList;
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
        process.exit(1);
    }
});
const getTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield prisma.todo.findUnique({ where: { id: todoId } });
        yield prisma.$disconnect();
        return todo;
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
        process.exit(1);
    }
});
/* PATCH Method */
const patchTodo = (todoId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                title: body.title,
                details: body.details
            }
        });
        yield prisma.$disconnect();
        return todo;
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
        process.exit(1);
    }
});
/* DELETE Method */
const deleteTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield prisma.todo.delete({
            where: {
                id: todoId
            }
        });
        yield prisma.$disconnect();
        return todo.id;
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
        process.exit(1);
    }
});
const todoModel = { createTodo, getTodoList, getTodo, patchTodo, deleteTodo };
exports.default = todoModel;
