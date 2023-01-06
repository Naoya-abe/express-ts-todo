import HttpException from './HttpException';

class NotFoundException extends HttpException {
	constructor(todoId: number) {
		super(404, `Get with id ${todoId} not found`);
	}
}

export default NotFoundException;
