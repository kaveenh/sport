const custombatDB=require("../schemas/Customizebat");

class BatFunctions{

static saveCustomBat(data,client){
    let newCustomBat = new custombatDB();
    newCustomBat.baseModel = data.baseModel;
    newCustomBat.sweetSpot = data.sweetSpot;
    newCustomBat.size = data.size;
    newCustomBat.weight = data.weight;
    newCustomBat.spineProfile = data.spineProfile;
    newCustomBat.edgeWidth = data.edgeWidth;
    newCustomBat.handleType = data.handleType;
    newCustomBat.gripColour = data.gripColour;
    newCustomBat.toeGuard = data.toeGuard;
    newCustomBat.finishing = data.finishing;
    newCustomBat.notes = data.notes;
    newCustomBat.email = data.email;
    newCustomBat.price = data.price;
    newCustomBat.firstName = data.firstName;
    newCustomBat.lastName = data.lastName;
    newCustomBat.address = data.address;
    newCustomBat.phoneNo = data.phoneNo;
    newCustomBat.orderNotes = data.orderNotes;
    newCustomBat.paymentmethod = data.paymentmethod;
    newCustomBat.cardno = data.cardno;
    newCustomBat.expirydate = data.expirydate;
    newCustomBat.cardcode = data.cardcode;
    


    newCustomBat.save().then(function(savedCustomBat){
        console.log("save successful : " + savedCustomBat);
        client.emit("Customized Bat Saved")
    }).catch(function(error){
        console.log(error.message);
        client.emit("Customized Bat Failed")
    })

}

}

module.exports=BatFunctions;
