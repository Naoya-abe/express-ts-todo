import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* POST Method */
const createTodo = async (body: { title: string; details?: string }) => {
	try {
		const todo = await prisma.todo.create({
			data: {
				title: body.title,
				details: body.details
			}
		});
		await prisma.$disconnect();
		return todo;
	} catch (error) {
		console.log(error);
		await prisma.$disconnect();
		process.exit(1);
	}
};

/* GET Method */
const getTodoList = async () => {
	try {
		const todoList = await prisma.todo.findMany();
		await prisma.$disconnect();
		return todoList;
	} catch (error) {
		await prisma.$disconnect();
		throw error;
	}
};
const getTodo = async (todoId: number) => {
	try {
		const todo = await prisma.todo.findUnique({ where: { id: todoId } });
		await prisma.$disconnect();
		return todo;
	} catch (error) {
		await prisma.$disconnect();
		throw error;
	}
};

/* PATCH Method */
const patchTodo = async (
	todoId: number,
	body: { title?: string; details?: string; isDone?: boolean }
) => {
	try {
		const todo = await prisma.todo.update({
			where: {
				id: todoId
			},
			data: {
				title: body.title,
				details: body.details,
				isDone: body.isDone
			}
		});
		await prisma.$disconnect();
		return todo;
	} catch (error) {
		await prisma.$disconnect();
		throw error;
	}
};

/* DELETE Method */
const deleteTodo = async (todoId: number) => {
	try {
		const todo = await prisma.todo.delete({
			where: {
				id: todoId
			}
		});
		await prisma.$disconnect();
		return { id: todo.id };
	} catch (error) {
		await prisma.$disconnect();
		throw error;
	}
};

const todoModel = { createTodo, getTodoList, getTodo, patchTodo, deleteTodo };
export default todoModel;
