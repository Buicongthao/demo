const express = require("express");
const app = express();

const ngu = (async(req,res)=>{
    res.status(200).json({message: "ngu"});
})
module.exports = ngu;