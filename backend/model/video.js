const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String,
})

const Video = mongoose.model('Video', VideoSchema, 'videos');

module.exports = Video;