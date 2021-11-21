const Transfer = require("../client/transfer");

class IntegrationUsecase {
    CheckEventSubscription(req, res) {
        switch (req.body.event.subscription){
            case 'invoice':
                if (req.body.event.log.type == 'credited'){
                    const newTransfer = new Transfer()

                    console.log("Transfer triggered")

                    const creditedAmount = req.body.event.log.invoice.amount
                    newTransfer.Create(creditedAmount)
                    
                    res.status(200).end()
                }
            default:
                console.log(req.body) 
                res.status(200).end() 
        }
    }
}

module.exports = IntegrationUsecase;
