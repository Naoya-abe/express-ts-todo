import request from 'supertest';
import app from '../src/app';

describe('test app.ts', () => {
	test('test "/"', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
		expect(response.body.message).toBe('ok');
	});
});
