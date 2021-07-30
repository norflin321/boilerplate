import express from 'express';

export const startExpress = () => {
  const app = express();
  app.use(express.json());

  app.get('/ping', (_, res) => res.json('pong'));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`listen on port: ${PORT}`));
};
