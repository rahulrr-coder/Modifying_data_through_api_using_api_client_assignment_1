require('dotenv').config();
const mongoose=require("mongoose");
const express= require('express');
connectedDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDb Connected Successfully")

    }).catch((err)=>{
        console.error('MongoDb not Connected')
    })

}
module.exports=connectedDatabase;
