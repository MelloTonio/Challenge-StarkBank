const Transfer = require("../client/transfer");

class IntegrationUsecase {
    CheckEventSubscription(req, res) {
        switch (req.body.event.subscription){
            case 'invoice':
                if (req.body.event.log.type == 'credited'){
                    console.log("Transfer triggered")

                    const transfer = new Transfer()

                    const creditedAmount = req.body.event.log.invoice.amount

                    // Hardcoded stark bank account
                    let account = [
                        {
                            amount: creditedAmount,
                            bankCode: '20018183',
                            branchCode: '0001',
                            accountNumber: '6341320293482496',
                            taxId: '20.018.183/0001-80',
                            name: 'Stark Bank S.A',
                            accountType: 'payment',
                        }
                    ]
                    
                    transfer.SendTo(account)
                    
                    res.status(200).end()
                }
            default:
                console.log(req.body) 
                res.status(200).end() 
        }
    }
}

module.exports = IntegrationUsecase;
