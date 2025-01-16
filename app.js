import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import fileUpload from "express-fileupload";
import Router from "./routers/router.js";
import { PORT,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME,MAX_JSON_SIZE,MAX_FILE_UPLODE } from "./app/config/config.js";

const app=express();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());

app.use(express.json({
    limit:MAX_JSON_SIZE
}));

app.use(fileUpload({
    limits:MAX_FILE_UPLODE
}));

const limiter=rateLimit({
    windowMs:REQUEST_LIMIT_TIME,
    max:REQUEST_LIMIT_NUMBER
});
app.use(limiter);
app.use("/api",Router);


app.listen(PORT,()=>{
    console.log(`This Server Runnin on ${PORT} Port`);
    
})