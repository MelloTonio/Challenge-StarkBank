const starkbank = require('starkbank');

let privateKeyContent = process.env.PRIVATE_KEY

let user = new starkbank.Project({
    environment: 'sandbox',
    id: '5642664049377280',
    privateKey: privateKeyContent
});
starkbank.user = user;

export default starkbank;