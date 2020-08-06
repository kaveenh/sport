var mongoose = require('mongoose');

 customerSchema = mongoose.Schema({
     userName: {type: String, unique: true},
     
     email:String,
     password:Object,
     
 });
 
 var customerDB = mongoose.model('customers', customerSchema);
 module.exports = customerDB;