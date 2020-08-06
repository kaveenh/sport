var mongoose = require('mongoose');

 orderSchema = mongoose.Schema({
    
    firstName:String,
    lastName:String,
        address:String,
        phoneNo:String,
        orderNotes:String,
        paymentmethod:String,
        cardno:String,
        expirydate:String,
        cardcode:String,
        prodquant:String,
        prodname:String,
        prodprice:String,
        tot:String
 });
 
 var orderDB = mongoose.model('Order', orderSchema);
 module.exports = orderDB;