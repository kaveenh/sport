const mongoose = require('mongoose');
const customerDb = require('../schemas/Customer');
const EncryptionFunctions =require("./Encryption");
const ex = require("../server");

class UserFunctions{

    static loginFunction(data,client){
        customerDb.findOne({email:data.email}).then(function(foundData){
            if(foundData){
                console.log("User Found")
               const hashedPassword= EncryptionFunctions.getHashedPassword({value:data.password,salt:foundData.password.salt});
               if(hashedPassword.passwordHash===foundData.password.passwordHash){
                   console.log("password matched")
                   client.userData=foundData
                   client.type="customer"
                   client.emit("password matched")
                   ex.addToClientArray(client)
                   
               }
               else{
                   console.log("password incorrect")
                    client.emit("password incorrect")
               }
            }else{
                console.log("User not found")
                client.emit("user not found")
            }
        })
    }

    static signUpFunction(data, client){
        customerDb.findOne({$or:[{userName : data.userName},{email:data.email}]}).then(function(foundData){
            if(foundData){
                console.log("Error:User already Exists");
                client.emit("user already exists");
            }
            else{
                let newPassword=EncryptionFunctions.saltHashPassword(data.password)
                let newCustomer=null;
                console.log (newPassword);
                if(!data.provider){
                 newCustomer=new customerDb();
                }
                        newCustomer.userName=data.userName;
                        newCustomer.email=data.email;
                        newCustomer.firstName=data.firstName;
                        newCustomer.lastName=data.lastName;
                        newCustomer.phoneNo=data.phoneNo;
                        newCustomer.address=data.address;
                        newCustomer.password=newPassword;
                        newCustomer.description=data.description;

                        newCustomer.save().then(function(savedCustomer){
                            console.log("save successful : " + savedCustomer);
                            client.emit("save successful")
                        }).catch(function(error){
                            console.log(error.message);
                            client.emit("internal error")
                        })
                    }
                   
                })
                
            }
            


}

module.exports=UserFunctions;
