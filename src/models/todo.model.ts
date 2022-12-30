/* POST Method */
const createTodo = () => {
	return { message: 'createTodo' };
};

/* GET Method */
const getTodoList = () => {
	return { message: 'getTodoList' };
};
const getTodo = () => {
	return { message: 'getTodo' };
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
