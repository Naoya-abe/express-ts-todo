import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import * as fs from 'fs';
import path from 'path';
import todoRouter from './routes/todo.route';

const app: Express = express();
app.use(express.json());

const swaggerPath = path.resolve(__dirname, '../docs/swagger.yaml');
const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf-8'));
// @ts-ignore
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Todo:後々、型定義について修正する

app.use('/todo', todoRouter);

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: 'ok' });
});

export default app;
