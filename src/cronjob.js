const cron = require("node-cron")
const Invoice = require("./client/invoice")

// Is this valid as random people?
let invoices = [
    {
        name: 'Antonio', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 451, //change to random
        taxId: '714.763.280-05', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Dimitri',
        due: '2021-12-15T16:27:37.585+00:00', 
        amount: 452, 
        taxId: '309.207.420-33', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Jason', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 450, 
        taxId: '714.763.280-05', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Julia', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 453, 
        taxId: '981.516.240-35', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Yara', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 454, 
        taxId: '783.160.960-13', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Joao', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 455, 
        taxId: '892.548.140-59', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Louis', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 456, 
        taxId: '191.205.200-85', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    },
    {
        name: 'Hugo', 
        due: '2021-12-15T16:27:37.585+00:00',
        amount: 457, 
        taxId: '512.547.790-78', 
        descriptions: [ { key: 'Field1', value: 'Something' } ], 
        fine: 1.1,
        interest: 2.4
    }
]

class InvoiceCronjob {
    schedule(){
        console.log("Scheduling cronjobs...")

        cron.schedule("0 1 * * *", () =>{
            const newTransfer = new Invoice();

            this.insertMissingValues(invoices)
            newTransfer.Create(invoices);
        })
    }

    insertMissingValues(invoices){
        for (let invoice of invoices) {
            invoice.amount = Math.floor(Math.random() * 1000000);
        }
    }
}


module.exports = new InvoiceCronjob();