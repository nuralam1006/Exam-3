import { EncodeToken,DecodeToken } from "../utility/tokenUtility.js";




export const HelloWorld=async (req,res)=>{
    res.send("Hello World")
}
export const TokenEncode=async (req,res)=>{
    const result=EncodeToken("nur1006@gmail.com","nur_1006");
    res.json({token:result})
}

export const TokenDecode=async (req,res)=>{
    const result=DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cjEwMDZAZ21haWwuY29tIiwidXNlcl9pZCI6Im51cl8xMDA2IiwiaWF0IjoxNzM2OTUxOTY3LCJleHAiOjQzMjg5NTE5Njd9.ktRaDI05opaBoeIn2mFEeqdjmHV60eQA0oaI6jz4L0s");
    res.json({token:result})
}

export const PostBody=async(req,res)=>{
    res.send("I am post body")
}