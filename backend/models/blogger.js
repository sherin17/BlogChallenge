const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BloggerSchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    articlename: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    follow: {
        type: Number,
        required: true
    },
    blog_content: {
        type: String,
        required:true
    },
    comments: {
        type: String,
        required:true
    }

})


let BloggerDATA = mongoose.model('bloggerdetail', BloggerSchema)

module.exports = BloggerDATA