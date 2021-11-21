const starkbank = require("./credentials");

class Transfer {
   async Create(amount){
       try{
            await starkbank.transfer.create([
                {
                    amount: amount,
                    bankCode: '20018183',
                    branchCode: '0001',
                    accountNumber: '6341320293482496',
                    taxId: '20.018.183/0001-80',
                    name: 'Stark Bank S.A',
                    accountType: 'payment',
                }
            ]); 
        } catch (error) {
            console.log("Error while creating transfer: ", error)
        }
   } 
}

module.exports = Transfer;