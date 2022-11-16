const express = require('express')
const mongoose = require('mongoose')
const app = new express()
app.use(express.json()) // to recieve data from front end



const logger = require('morgan') // for seeing api calls in terminal
const cors = require('cors')
app.use(logger('dev'))
app.use(cors()) //to connect frontend and backend without any disturbance

//mongoDB connection

const BloggerDATA = require('./models/blogger')
mongoose.connect('mongodb+srv://Sherin17:Reenijiji1@cluster0.quvjjgb.mongodb.net/BlogWebsite?retryWrites=true&w=majority')
.then(()=>{
    console.log("My mongodb is connected successfully");
})
.catch(error=>{
    console.log('Connection error'+error);
})

//TODO: get data from db  using api 

app.get('/api/bloggerlist',(req,res)=>{
    BloggerDATA.find().then(function(data){
        res.send(data);
    })
})

var port = process.env.PORT || 3000;
// Server code 
app.listen(3000,()=>{
    console.log('server is connected')
})

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/blog-website')));
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname + '/dist/blog-website/index.html'));
});
