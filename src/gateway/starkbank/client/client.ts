import { Request } from 'express';

import starkBank from './credentials';

class BankClient {
    async CreateInvoice(invoicesArr: any) {
        try {
            let invoices = await starkBank.invoice.create(invoicesArr);   

            for (let invoice of invoices) {
                console.log(invoice);
            }
        } catch (error) {
            console.log("Error while creating invoice: ", error)
        }
    }

    async ExecuteTransfers(transfers: any): Promise<number>{
        try{
             await starkBank.transfer.create(transfers); 

             return 201
         } catch (error) {
             console.log("Error while creating transfer: ", error)

             return 400
         }
    } 

    async HandleEvent(req: Request): Promise<number> {
        switch (req.body.event.subscription){
            // Check if the current event is an invoice and if it's credited
            case 'invoice':
                if (req.body.event.log.type == 'credited'){
                    const creditedAmount = req.body.event.log.invoice.amount

                    let transfers = this.buildNewTransfer(creditedAmount)

                    console.log("Executing Transfer...")
                    let status = await this.ExecuteTransfers(transfers)

                    return status
                }
            default:
                console.log(req.body) 
                return 422
        }
    }

    private buildNewTransfer(amount: number): any {
        // Hardcoded stark bank account
        let newTransfer = [
            {
                amount: amount,
                bankCode: '20018183',
                branchCode: '0001',
                accountNumber: '6341320293482496',
                taxId: '20.018.183/0001-80',
                name: 'Stark Bank S.A',
                accountType: 'payment',
            }
        ]

        return newTransfer
    }
 
}

export default new BankClient();