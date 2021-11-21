const starkbank = require("./credentials");

class Invoice {
    async Create(invoicesArr) {
        try {
            let invoices = await starkbank.invoice.create(invoicesArr);   

            for (let invoice of invoices) {
                console.log(invoice);
            }
        } catch (error) {
            console.log("Error while creating invoice: ", error)
        }
    }
}

module.exports = Invoice;



