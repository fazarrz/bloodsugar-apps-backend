const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userHandler = require('../handlers/UserHandler');
const validationAuth = require('../middlewares/ValidationAuth');
// const csurf = require('csurf');
const cookieParser = require('cookie-parser');

// const csrfProtection = csurf({cookie: true});

router.use(cookieParser());
// router.use(csrfProtection);

router.use(bodyParser.json());

router.post('/register', validationAuth.validateRegister, userHandler.registerHandler);




module.exports = router;