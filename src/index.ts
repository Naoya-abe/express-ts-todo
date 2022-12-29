import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  console.log('ok');
  res.status(200).json({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
