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
		console.log(error);
		await prisma.$disconnect();
		process.exit(1);
	}
};
const getTodo = async (todoId: number) => {
	try {
		const todo = await prisma.todo.findUnique({ where: { id: todoId } });
		await prisma.$disconnect();
		return todo;
	} catch (error) {
		console.log(error);
		await prisma.$disconnect();
		process.exit(1);
	}
};

/* PATCH Method */
const patchTodo = () => {
	return { message: 'patchTodo' };
};

/* DELETE Method */
const deleteTodo = () => {
	return { message: 'deleteTodo' };
};

const todoModel = { createTodo, getTodoList, getTodo, patchTodo, deleteTodo };
export default todoModel;
