import Tweet from '../models/tweet.js'

export const getTweets = async (req, res) => {
    try {
        // Return all tweets
        const tweets = await Tweet.find();
        res.status(200).json(tweets);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
}

export const createTweet = async (req, res) => {
    const { author, text, likes, creationDate } = req.params;

    try {
        // Create new tweet, save to db
        const newTweet = new Tweet({ author, text, likes, creationDate });
        await newTweet.save();
        res.status(200).json(newTweet);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}