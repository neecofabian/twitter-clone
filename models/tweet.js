import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 30
    },
    text: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    likes: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: new Date()
    }
})

var Tweet = mongoose.model('Tweet', tweetSchema, 'tweets');
export default Tweet;