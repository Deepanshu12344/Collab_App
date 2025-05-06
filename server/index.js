import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { register } from './controllers/auth.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.post("/register", register);
app.use("/auth", authRoutes);

mongoose.connect("mongodb://localhost:27017/collab")
  .then(() => {
    server.listen(1234, () => console.log('Server running on port 1234'));
  })
  .catch(error => console.log('MongoDB connection error:', error));