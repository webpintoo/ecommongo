import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();
app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())
//Mongo details:
//kamalakantadash / kkd123456
//mongodb+srv://kamalakantadash:kkd123456@cluster0.9kjht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const server =  http.createServer(app);
server.listen(8080,() => {
    console.log("server listen on 8080 port")
})

const MONGO_URL = 'mongodb+srv://kamalakantadash:kkd123456@cluster0.9kjht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => {
    console.log("------------- 30 -----------------")
    console.log(error)
})

app.use('/', router())