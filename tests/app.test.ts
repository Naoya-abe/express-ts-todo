import request from 'supertest';
import app from '../src/app';

describe('test todo function', () => {
	let todoId: number = 0;

	test('Sample GET "/"', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
		expect(response.body.message).toBe('ok');
	});

	/* POST Method */
	test('Pass empty title to POST "/todo"', async () => {
		const response = await request(app).post('/todo').send({
			title: '',
			details: '毎朝6時に起きてランニングをする。'
		});
		expect(response.statusCode).toBe(400);
	});
	test('Success POST "/todo"', async () => {
		const response = await request(app).post('/todo').send({
			title: 'ランニング',
			details: '毎朝6時に起きてランニングをする。'
		});
		todoId = response.body.id;
		expect(response.statusCode).toBe(201);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('ランニング');
		expect(response.body.details).toBe('毎朝6時に起きてランニングをする。');
		expect(response.body.isDone).toBe(false);
	});

	/* GET Method */
	// GET TodoList
	test('Success GET "/todo/list"', async () => {
		const response = await request(app).get('/todo/list');
		expect(response.statusCode).toBe(200);
		expect(response.body[0].id).toBe(todoId);
		expect(response.body[0].title).toBe('ランニング');
		expect(response.body[0].details).toBe('毎朝6時に起きてランニングをする。');
		expect(response.body[0].isDone).toBe(false);
	});

	// GET Todo
	test('Not Found in GET "/todo/:todoId"', async () => {
		const response = await request(app).get('/todo/100000');
		expect(response.statusCode).toBe(404);
	});
	// test('Pass todoId in string to GET "/todo"', async () => {
	// 	const response = await request(app).get('/todo').send({
	// 		todoId: '1'
	// 	});
	// 	expect(response.statusCode).toBe(400);
	// });
	test('Success GET "/todo"', async () => {
		const response = await request(app).get(`/todo/${todoId}`);
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('ランニング');
		expect(response.body.details).toBe('毎朝6時に起きてランニングをする。');
		expect(response.body.isDone).toBe(false);
	});

	/* PATCH Method */
	test('Pass empty body to PATCH "/todo"', async () => {
		const response = await request(app).patch('/todo').send({});
		expect(response.statusCode).toBe(400);
	});
	test('Pass empty todoId to PATCH "/todo"', async () => {
		const response = await request(app).patch('/todo').send({
			title: '英会話',
			details: '毎日就業後に英会話をする。',
			isDone: true
		});
		expect(response.statusCode).toBe(400);
	});
	test('Pass todoId in string to PATCH "/todo"', async () => {
		const response = await request(app).patch('/todo').send({
			todoId: '1',
			title: '英会話',
			details: '毎日就業後に英会話をする。',
			isDone: true
		});
		expect(response.statusCode).toBe(400);
	});
	test('Pass empty title to PATCH "/todo"', async () => {
		const response = await request(app).patch('/todo').send({
			todoId,
			title: '',
			details: '毎日就業後に英会話をする。',
			isDone: true
		});
		expect(response.statusCode).toBe(400);
	});
	test('Pass empty isDone to PATCH "/todo"', async () => {
		const response = await request(app).patch('/todo').send({
			todoId,
			title: '英会話',
			details: '毎日就業後に英会話をする。'
		});
		expect(response.statusCode).toBe(400);
	});
	test('Success PATCH "/todo"', async () => {
		const response = await request(app).patch(`/todo`).send({
			todoId,
			title: '英会話',
			details: '毎日就業後に英会話をする。',
			isDone: true
		});
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('英会話');
		expect(response.body.details).toBe('毎日就業後に英会話をする。');
		expect(response.body.isDone).toBe(true);
	});

	/* DELETE Method */
	test('Pass empty body to DELETE "/todo"', async () => {
		const response = await request(app).delete('/todo').send({});
		expect(response.statusCode).toBe(400);
	});
	test('Success DELETE "/todo"', async () => {
		const response = await request(app).delete(`/todo`).send({ todoId });
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('英会話');
		expect(response.body.details).toBe('毎日就業後に英会話をする。');
		expect(response.body.isDone).toBe(true);
	});
});
