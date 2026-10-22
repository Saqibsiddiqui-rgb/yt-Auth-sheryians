import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());        // Middleware
app.use(morgan('dev'));         // Loger to see details what happend 

export default app;
