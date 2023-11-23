const userModel = require('../models/UserModel');

const sessionLoginHandler = async (req, res) => {

    const tokenId = req.body.idToken.toString();

    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    try {
        const sessionCookie = await userModel.sessionLoginModel(tokenId, expiresIn);

        res.cookie('session', sessionCookie, {maxAge: expiresIn, httpOnly: true});

        res.status(200).json({message: 'Login successful'});

    } catch (err) {
        res.status(400).json({error: err.message});
    }

};

const registerHandler = async (req, res) => {

    const {email, password} = req.body;


    try {
        const userRecord = await userModel.registerModel(email, password);
        res.status(200).json({userRecord});
    } catch (err) {
        res.status(400).json({error: err.message});
    }

};

module.exports = {sessionLoginHandler, registerHandler};