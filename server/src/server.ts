import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([]);
})

app.post('/ads', (request, response) => {
  return response.json([]);
})

app.get('/gsmes/:id/ads', (request, response) => {
  return response.json({ message: 'Ok 22!'})
});

app.get('/gsmes/:id/discord', (request, response) => {
  return response.json({ message: 'Ok 22!'})
});

app.listen(3333);