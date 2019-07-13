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
    notes:String
    
    
    
 });
 
 var custombatDB = mongoose.model('custombats', custombatSchema);
 module.exports = custombatDB;