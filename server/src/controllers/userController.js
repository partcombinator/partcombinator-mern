const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/email");
const crypto = import("crypto");


function createToken(user, SECRET_KEY, expiresIn){
    const {id, name, email, username } = user;
    const payload = {
        id,
        name,
        email,
        username
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

exports.singUp = async (req, res) => {

    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({
                msg: 'User already exists'
            });
        } else {

            // create the user
            user = new User(req.body);

            // hashear the password
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password, salt)
            user.username = email.substring(0, email.indexOf("@"));

            // save the user
            userSave = await user.save()
            if ( process.env.EMAIL_VERIFY === 'YES'){
                url = `${process.env.BASE_URL}/user/activate/${userSave.activation_token}`

                body = `Hello ${user.name},
                'Click the following link to activate the account: ${url}'
                'Thanks,'
                'Team. '`
                sendEmail(email,"Verify Account", "Body")
                console.log("URL: ", url)
            } else {
                user.verified = true;
            }

            // create the sign
            const payload = {
                user: {
                    id: user.id
                }
            }

            // sign the JWT
            jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 3600 // 1 hrs
            }, (error, token) => {
                if (error) throw error;
                res.status(200).json({
                    token
                });

            })

        }


    } catch (error) {
        console.log(error);
        res.status(400).send('Error at create user');
    }
}




// usuarioAutenticado
exports.AuthenticatedUser = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error' })
    }
}



exports.loginUser = async(req, res) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }
    const { email, password} = req.body;
    try {
        
        const userFound = await User.findOne({email});
        if(!userFound) {
            return res.status(400).json({ msg: 'Error. Email does not exist' })
            
        }
        const passwordOk = await bcryptjs.compare(password ,userFound.password);

        if(!passwordOk) {
            return res.status(400).json({ msg: 'The Password is Incorrect' })
        }
        token = createToken(userFound, process.env.SECRET_KEY, "24h")
        return res.status(200).json({ token: token })
        

    } catch (error) {
        console.log(error);
    }
}


// usuarioAutenticado
exports.ActivateUser = async(req, res) => {
    try {
        const user = await User.findOne({ activation_token: req.params.token });
        if(!user){
            return res.status(400).json({ msg: 'The Token is Incorrect' })
        }else{
            const newUser = {};
            newUser.verified = true
            userMody = await User.findOneAndUpdate({_id: user.id}, newUser, { new:true })
            res.status(200).json({user});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error' })
    }
}