import jwt from "jsonwebtoken";
import { JWT_SERECT,JWT_EXPIRE_TIME } from "../config/config.js";

export const EncodeToken=(email,user_id)=>{
    const KEY=JWT_SERECT;
    const EXPAIRE={expiresIn:JWT_EXPIRE_TIME};
    const PAYLOAD={
        email:email,
        user_id:user_id
    };
    return jwt.sign(PAYLOAD,KEY,EXPAIRE)
}

export const DecodeToken=(token)=>{
    try{
        return jwt.verify(token,JWT_SERECT)
    }catch(e){
        return null;
    }
}