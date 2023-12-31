const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                Type: Number
            },
            const: {
                Type: Number
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
    
})

module.exports = mongoose.model('orders', orderSchema)