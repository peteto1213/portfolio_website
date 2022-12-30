const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await Admin.findById(decoded.id).select('-password')
            

        } catch (error) {

            console.log(error)
            res.status(401)
            throw new Error('Not authorized to get the information')

        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {
    protect
}