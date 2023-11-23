const {body, validationResult} = require('express-validator');
const admin = require("../config/FirebaseConfig");

const validateRegister = [

    body('email')
    .custom(async value => {
        
        try {
            const emailAlready = await admin.auth.getUserByEmail(value);

            if(emailAlready){
                return Promise.reject('Email already in use');
            }

        }catch(err){

            if(err.code === 'auth/user-not-found'){
                return Promise.resolve();
            }
        }
    })
    .notEmpty().withMessage('Email cannot be empty')
    .isEmail().withMessage('Must be a valid email address'),

    body('password')
    .notEmpty().withMessage('Password cannot be empty')
    .isLength({min: 6}).withMessage('Password must be at least 6 characters long'),


    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

module.exports = {validateRegister};