import request from 'supertest';
import app from '../src/app';

describe('test todo function', () => {
	let todoId: number = 0;

	test('SAMPLE "/"', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
		expect(response.body.message).toBe('ok');
	});

	/* POST Method */
	test('POST "/todo', async () => {
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
	test('GET "/todo/list"', async () => {
		const response = await request(app).get('/todo/list');
		expect(response.statusCode).toBe(200);
		expect(response.body[0].id).toBe(todoId);
		expect(response.body[0].title).toBe('ランニング');
		expect(response.body[0].details).toBe('毎朝6時に起きてランニングをする。');
		expect(response.body[0].isDone).toBe(false);
	});
	test('GET "/todo"', async () => {
		const response = await request(app).get(`/todo`).send({
			todoId
		});
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('ランニング');
		expect(response.body.details).toBe('毎朝6時に起きてランニングをする。');
		expect(response.body.isDone).toBe(false);
	});
	/* PATCH Method */
	test('PATCH "/todo"', async () => {
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
	test('DELETE "/todo"', async () => {
		const response = await request(app).delete(`/todo`).send({ todoId });
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
		expect(response.body.title).toBe('英会話');
		expect(response.body.details).toBe('毎日就業後に英会話をする。');
		expect(response.body.isDone).toBe(true);
	});
});
