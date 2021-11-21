const cron = require("node-cron")
const Invoice = require("./client/invoice")

class InvoiceCronjob {
    schedule(){
        cron.schedule("* * * * *", () =>{
            const newTransfer = new Invoice();

            newTransfer.Create('Antonio',355, '714.763.280-05', [ { key: 'Field1', value: 'Something' } ], 1.1, 2.4);
        })
    }
}

module.exports = InvoiceCronjob;