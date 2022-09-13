import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Ok 22!'})
});

app.listen(3333);