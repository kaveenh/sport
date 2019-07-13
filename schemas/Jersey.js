var mongoose = require('mongoose');

 jerseySchema = mongoose.Schema({
     id:String,
     userName:String,
     image:String,
     description:String,
     xsquantity:String,
     squantity:String,
     mquantity:String,
     lquantity:String,
     xlquantity:String
     
 });
 
 var jerseyDB = mongoose.model('jersey', jerseySchema);
 module.exports = jerseyDB;