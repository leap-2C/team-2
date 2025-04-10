import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import userRouter from './router/user-router';

const app = express();
const PORT = 9000;
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.use('/user', userRouter);
app.use('/donation', userRouter);
app.use('/bankCard', userRouter);
app.use('/profile', userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});