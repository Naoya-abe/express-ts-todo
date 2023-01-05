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
		expect(response.body.title).toBe('ランニング');
		expect(response.body.details).toBe('毎朝6時に起きてランニングをする。');
	});

	/* GET Method */
	test('GET "/todo/list"', async () => {
		const response = await request(app).get('/todo/list');
		expect(response.statusCode).toBe(200);
		expect(response.body[0].title).toBe('sample title');
	});
	test('GET "/todo/:todoId"', async () => {
		const response = await request(app).get(`/todo/${todoId}`);
		expect(response.statusCode).toBe(200);
		expect(response.body.title).toBe('ランニング');
		expect(response.body.details).toBe('毎朝6時に起きてランニングをする。');
	});
	/* PATCH Method */
	test('PATCH "/todo/:todoId"', async () => {
		const response = await request(app).patch(`/todo/${todoId}`).send({
			title: '英会話',
			details: '毎日就業後に英会話をする。'
		});
		expect(response.statusCode).toBe(200);
		expect(response.body.title).toBe('英会話');
		expect(response.body.details).toBe('毎日就業後に英会話をする。');
	});
	/* DELETE Method */
	test('DELETE "/todo/:todoId"', async () => {
		const response = await request(app).delete(`/todo/${todoId}`);
		expect(response.statusCode).toBe(200);
		expect(response.body.id).toBe(todoId);
	});
});
