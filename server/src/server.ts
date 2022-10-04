import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  });
  
  return response.json(games);
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