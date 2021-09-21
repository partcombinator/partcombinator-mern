const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // read the token for header
    const token = req.header('x-auth-token');
     

    // check if we have a token
    if(!token) {
        return res.status(401).json({ msg: 'There is no token, invalid permission' })
    }

    // Check
    try {
        const encryption = jwt.verify(token, process.env.SECRET_KEY)
        req.user = encryption.user;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Invalid token' })
    }
}