const starkbank = require("./starkbank");

class Invoice {
    async Create() {
        try {
            let invoices = await starkbank.invoice.create([{
                amount: 300,
                due: '2021-12-15T16:27:37.585+00:00',
                taxId: '012.345.678-90',
                name: ':)',
                expiration: 123456789,
                fine: 2.5,
                interest: 1.3,
                tags: ['War supply', 'Invoice #1234'],
                descriptions: [
                    {
                        'key': 'Field1',
                        'value': 'Something'
                    }
                ]
            }]);   

            for (let invoice of invoices) {
                console.log(invoice);
            }
        } catch (error) {
            console.log("Error while creating invoice: ", error)
        }
    }
}

var invoiceTest = new Invoice();
invoiceTest.Create();

module.exports = Invoice;



