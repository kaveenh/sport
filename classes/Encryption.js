var crypto = require('crypto');

class EncryptionFunctions{

    static genRndomString(length){
        return crypto.randomBytes(Math.ceil(length/2)) 
            .toString('hex')
            .slice(0,length);
    }

    static sha512(password,salt){
        let hash =crypto.createHmac('sha512',salt)/*Hashing algorithm sha512*/
        hash.update(password);
        let value=hash.digest('hex');
        return{
            salt:salt,
            passwordHash:value
        };
    };

    static saltHashPassword(userPassword){
        let salt=this.genRndomString(16);/*16 character salting string*/
        return this.sha512(userPassword,salt);

    }

    static getHashedPassword(password){
        return this.sha512(password.value,password.salt)
    }
}

module.exports=EncryptionFunctions;