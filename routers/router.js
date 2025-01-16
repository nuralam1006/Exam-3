import express from "express";
import *as TokenController from "../app/controllers/controller.js"

const Router=express.Router();

Router.get("/HelloWorld",TokenController.HelloWorld)

Router.get("/TokenEncode",TokenController.TokenEncode);
Router.get("/TokenDecode",TokenController.TokenDecode);

Router.post("/PostBody",TokenController.PostBody)

export default Router;