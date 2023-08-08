const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/anatytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require('./config/keys')
const app = express ()


mongoose.connect('mongodb+srv://Denis:12345678910@cluster0.emtmsa4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoBD conected.'))
    .catch(error => console.log(error))




app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/auth',authRoutes )
app.use('/api/analytics',analyticsRoutes )
app.use('/api/category',categoryRoutes )
app.use('/api/order',orderRoutes )
app.use('/api/position',positionRoutes )



module.exports = app