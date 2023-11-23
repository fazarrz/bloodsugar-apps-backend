const admin = require("../config/FirebaseConfig");

const sessionLoginModel = async (tokenId, expiresIn) => {
    
    const sessionCookie = await admin.auth().createSessionCookie(tokenId, {expiresIn});

    return sessionCookie;
     
}

const registerModel = async (email, password) => {

    const userRecord = await admin.auth.createUser({
        email,
        password
    });

    return userRecord;
}

module.exports = {sessionLoginModel, registerModel};