const jerseyDB=require("../schemas/Jersey");

class JerseyFunctions{

static saveJersey(data,client){
    let newJersey = new jerseyDB();
    newJersey.email=data.email;
    newJersey.image=data.image;
    newJersey.deadline=data.deadline;
    newJersey.description=data.description;
    newJersey.XXS=data.XXS;
    newJersey.XS=data.XS;
    newJersey.S=data.S;
    newJersey.M=data.M;
    newJersey.L=data.L;
    newJersey.XL=data.XL;
    newJersey.XXL=data.XXL;




    newJersey.save().then(function(savedJersey){
        console.log("save successful : " + savedJersey);
        client.emit("Jersey Saved")
    }).catch(function(error){
        console.log(error.message);
        client.emit("Jersey Upload Failed")
    })

}

}

module.exports=JerseyFunctions;
