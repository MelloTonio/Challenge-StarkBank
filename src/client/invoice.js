const starkbank = require("./credentials");

class Invoice {
    async Create(name, amount, CPF, description, fine, interest) {
        try {
            let invoices = await starkbank.invoice.create([{
                amount: amount,
                due: '2021-12-15T16:27:37.585+00:00',
                taxId: CPF,
                name: name,
                fine: fine,
                interest: interest,
                descriptions: description
            }]);   

            for (let invoice of invoices) {
                console.log(invoice);
            }
        } catch (error) {
            console.log("Error while creating invoice: ", error)
        }
    }
}

module.exports = Invoice;



