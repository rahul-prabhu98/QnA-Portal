const jwt =  require('jsonwebtoken');

/**
 * verifying the state of token
 *
 * @param req
 * @param res
 * @param next
 * @returns {*|Promise<any>}
 */
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        console.log(req);
        const decode = jwt.verify(token, "seceret");
        req.verifiedUserData = decode;
        next();
    }catch(error){
        console.log("Verification failed");
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
