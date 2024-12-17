const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();

const redisClient = redis.createClient({url:'redis://redis:6379'});
redisClient.on('error', (err)=> console.log('error',err));
redisClient.on('connect', ()=> console.log('connected to redis'));
redisClient.connect();



const URI = `mongodb://root:example@mongo:27017`
mongoose.connect(URI).then(()=> console.log('connected to db.')).catch(err => console.log('error, ',err));

app.get('/',(req,res,next)=>{
    res.send('<h1>Hello Friend !</h1>');
});

app.listen(4000,()=> console.log('listening on port 4000'));