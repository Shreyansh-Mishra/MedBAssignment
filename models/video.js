let mongoose = require('mongoose');
let Schema = mongoose.Schema;
require('dotenv').config();

//connect the cluster to the schema
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });

let Video = new Schema({
    title: {type: String, required: true},
    description:{type:String, required:false},
    publishTime: {type: Date, default: false},
    //create a answer1 field containing answer and its timestamp
    thumbnails: {
        default: {type: String, required:false},
        medium: {type: String, required:false},
        high: {type: String, required:false},
    },
    channelTitle: {type: String, required:false},
    videoID: {type: String, required:false},
})



//create a mongodb model with the name 'User' and Schema User
let video = mongoose.model('Video', Video);

//export the model to use it in main files
module.exports = video;