var mongoose = require('mongoose');
custombatSchema = mongoose.Schema({
    
    baseModel:String,
    sweetSpot:String,
    size:String,
    weight:String,
    spineProfile:String,
    edgeWidth:String,
    handleType:String,
    gripColour:String,
    toeGuard:String,
    finishing:String,
    notes:String,
    email:String,
    price:String,
    firstName:String,
    lastName:String,
    address:String,
    phoneNo:String,
    orderNotes:String,
    paymentmethod:String,
    cardno:String,
    expirydate:String,
    cardcode:String,
    email:String
});
 
 var custombatDB = mongoose.model('custombats', custombatSchema);
 module.exports = custombatDB;