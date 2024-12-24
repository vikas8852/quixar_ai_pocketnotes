import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
// import bodyParser from 'body-parser';
import groupRoutes from './routes/groups.routes.js';
import messageRoutes from './routes/groupMessages.routes.js';
import errorHandler from "./middlewares/errorHandler.js"
const mongoose = await import("mongoose");


const app = express();

app.use(cors ({
    origin: 'http://localhost:3000',
    credentials : true,
}))

// This will allow requests from any origin
// app.use(cors());

app.use(bodyParser.json());


app.use('/api/groups', groupRoutes);
app.use('/api/groups', messageRoutes);
app.use(errorHandler);

export {app};