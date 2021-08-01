import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 30,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 255,
        unique: true
    }
})

var User = mongoose.model('User', userSchema, 'users');
export default User;