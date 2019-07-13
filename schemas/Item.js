var mongoose = require('mongoose');

 itemsSchema = mongoose.Schema({
    
    sport:String,
    itemName:String,
    brand:String,
    model:String,
    hand:String,
    description:String,
    price:Double
    
    
    
    
 });
 
 var itemsDB = mongoose.model('items', itemsSchema);
 module.exports = itemsDB;