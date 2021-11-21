const starkbank = require("./credentials");

class Transfer {
   async SendTo(account){
       try{
            await starkbank.transfer.create(account); 
        } catch (error) {
            console.log("Error while creating transfer: ", error)
        }
   } 
}

module.exports = Transfer;