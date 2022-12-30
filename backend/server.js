const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const { errorHandler } = require('./middleware/errorMiddleware')

//connect to the database when server.js is running
connectDB()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

// Routes
app.use('/api/admin', require('./routes/adminRoutes'))



// Error handler
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Server is running' )
})

app.listen(port, () => {console.log(`Server running at port ${port}`);})