import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const handle = (req, res, next) => {
    
    // authorization token without 'Bearer ' at the beginning.
    const token = req.headers.authorization

    // if no authorization token present, attaching 'authCheck' with value 'false' in the request.
    if (!token) {
        req.authCheck = false
        return next()
    }

    try {
        // if token is valid, attaching 'authCheck' with value 'true' and  'authUser' with decoded information in the request.
        const authUser = jwt.verify(token.substring(7), process.env.JWT_SECRET) 
        req.authCheck = true
        req.authUser = authUser
        return next()

    } catch (err) {
        // if invalid token, attaching 'authCheck' with value 'false' in the request.
        if (err instanceof JsonWebTokenError) {
            req.authCheck = false
            return next()
        }

        throw err
    }
}

export default handle