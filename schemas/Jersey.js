var mongoose = require('mongoose');

 jerseySchema = mongoose.Schema({
     email:String,
     image:Buffer,
     deadline: Date,
     description:String,
     address:String,
     XXS:String,
     XS:String,
     S:String,
     M:String,
     L:String,
     XL:String,
     XXL:String,
 });
 
 var jerseyDB = mongoose.model('jersey', jerseySchema);
 module.exports = jerseyDB;


 