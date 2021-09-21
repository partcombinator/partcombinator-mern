const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// create user
// api/user/singup
router.post('/singup', 
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'Add a email valid').isEmail(),
        check('password', 'The password must be at least 6 characters').isLength({min:6})
    ],
    userController.singUp
);

// login User
// api/user/login
router.post('/login',
    userController.loginUser
);


// get authenticated user
// api/user
router.get('/', 
    auth,
    userController.AuthenticatedUser

);

// login User
// api/user/activate/11111
router.get('/activate/:token', 
    userController.ActivateUser
);

module.exports = router;