import { plainToClass, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import HttpException from '../exceptions/HttpException';

const validationMiddleware = <T>(dto: any): RequestHandler => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const errors: ValidationError[] = await validate(
			plainToInstance(dto, req.body)
		);
		if (errors.length > 0) {
			const message = errors
				.map((error: ValidationError) => {
					// @ts-ignore
					return Object.values(error.constraints);
				})
				.join(', ');
			next(new HttpException(400, message));
		} else {
			next();
		}
	};
};

export default validationMiddleware;
