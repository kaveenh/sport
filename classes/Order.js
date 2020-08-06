const orderDB=require("../schemas/Order");

class OrderFunctions{

static saveOrder(data,client){
    let newOrder = new orderDB();
    newOrder.firstName = data.firstName,
    newOrder.lastName = data.lastName,
    newOrder.address = data.address,
    newOrder.phoneNo = data.phoneNo,
    newOrder.orderNotes = data.orderNotes,
    newOrder.paymentmethod = data.paymentmethod,
    newOrder.cardno = data.cardno,
    newOrder.expirydate = data.expirydate,
    newOrder.cardcode = data.cardcode,
    newOrder.prodquant = data.prodquant,
    newOrder.prodname = data.prodname,
    newOrder.prodprice = data.prodprice,
    newOrder.tot = data.tot,

    
    


    newOrder.save().then(function(savedOrder){
        console.log("save successful : " + savedOrder);
        client.emit("Order saved")
    }).catch(function(error){
        console.log(error.message);
        client.emit("Order failed")
    })

}

}

module.exports=OrderFunctions;