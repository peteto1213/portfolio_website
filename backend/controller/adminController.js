const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

/**
 * @route '/login'
 */
const login = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    if(!username || !password){
        res.status(400)
        throw new Error('Please enter correct information to login')
    }

    const admin = await Admin.findOne({ username })

    if(admin && (await bcrypt.compare(password, admin.password)) ){
        res.status(200).json({
            _id: admin.id,
            username: admin.username,
            token: generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid information')
    }
})

/**
 * @route '/register'
 */
const register = asyncHandler(async (req, res) => {
    const { secret, username, password } = req.body

    if(!secret || !username || !password){
        res.status(400)
        throw new Error('Please fill in all the required information')
    }

    if(secret !== process.env.REGISTER_SECRET){
        res.status(400)
        throw new Error('Secret not matching')
    }

    const repeatedAdmin = await Admin.findOne({ username })
    if(repeatedAdmin){
        res.status(400)
        throw new Error('Repeated registration')
    }

    const salt = await bcrypt.genSalt(10)
    const encrpytedPassword = await bcrypt.hash(password, salt)

    const admin = await Admin.create({
        username: username,
        password: encrpytedPassword
    })

    if(admin){
        res.status(201).json({
            username: admin.username,
        })
    }else{
        res.status(400)
        throw new Error('sth went wrong, please try again later')
    }

})

module.exports = {
    login,
    register
}