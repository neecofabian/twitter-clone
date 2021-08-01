import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import tweetRoutes from './routes/tweets.js';
import userRoutes from './routes/users.js';

const app = express();

app.use('/tweets', tweetRoutes);
app.use('/users', userRoutes);
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Connect to database
const CONNECTION_URL = 'mongodb+srv://twitter-clone-user:TeyYtV1tQFQhKqzj@cluster0.iuucz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((e) => console.log(e.message));
mongoose.set('useFindAndModify', false);