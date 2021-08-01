import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const register = async (req, res) => {
    try {
        // Check if user doesn't exist
        var user = await User.findOne({ username: req.body.username });
    
        if (user) {
            return res.status(400).send('Username taken');
        }
        
        // Create new user with hashed password, save to db
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user = User({ 
            username: req.body.username, 
            password: hashedPassword 
        });
    
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send('Username and password required');
    }
}
  
export const login = async (req, res) => {
    // Find user in db, check if password is correct
    const user = await User.findOne({ username: req.body.username });

    if (user == null) {
        return res.status(400).send('User Not Found');
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            return res.status(200).send('Success');
        } else {
            return res.status(402).send('Password Incorrect');
        }
    } catch {
        return res.status(400).send('Valid username and password required');
    }
}