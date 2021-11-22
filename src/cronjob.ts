const cron = require("node-cron")

import { Invoice } from "./domain/entities/invoice";

interface InvoiceClient {
    CreateInvoice(invoices: Invoice[]):void
}

class InvoiceCronjob {
    constructor(private invoiceClient: InvoiceClient) {}
    
    schedule(){
        console.log("Scheduling cronjobs...")

        // Schedule to create invoices every three hours
        cron.schedule("0 1 * * *", () =>{
            this.insertInvoiceData(invoices)
            
            this.invoiceClient.CreateInvoice(invoices);
        })
    }

    private insertInvoiceData(invoices: Invoice[]){
        for (let invoice of invoices) {
           
            invoice.amount = Math.floor(Math.random() * (1000000 - 1 + 1) + 1);

            let randomDay = Math.floor(Math.random() * (29 - 1 + 1) + 1);
            invoice.due = `2021-12-${randomDay}T16:27:37.585+00:00`
        }
    }
}

let invoices: Invoice[] = [
    {
        name: 'Antonio', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '714.763.280-05', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Dimitri',
        due: '2021-12-15T16:27:37.585+00:00', 
        amount: 0, 
        taxId: '309.207.420-33', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Jason', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '714.763.280-05', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Julia', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '981.516.240-35', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Yara', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '783.160.960-13', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Joao', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '892.548.140-59', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Louis', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '191.205.200-85', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Hugo', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 0, 
        taxId: '512.547.790-78', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    }
]

export default InvoiceCronjob;