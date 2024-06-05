import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import Connection from './database/db.js';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import userRoutes from './routes/user.js';

const app = express();

const PORT = process.env.PORT;

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads from req.body
app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/messages', messageRoutes);

app.use('/api/users', userRoutes);


Connection();


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

