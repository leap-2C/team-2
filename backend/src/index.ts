import express from 'express';
import cors from 'cors';
import { Prisma } from '@prisma/client';

const app = express();
const PORT = 9000;
app.use(cors());
app.use(express.json());




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});