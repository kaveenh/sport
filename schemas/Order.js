var mongoose = require('mongoose');

 orderSchema = mongoose.Schema({
    
    itemId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
    email: String,
    quantity: String,
    status: {type: String, default: "unaccepted"}
 });
 
 var orderDB = mongoose.model('order', orderSchema);
 module.exports = orderDB;