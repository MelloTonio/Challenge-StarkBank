const starkbank = require('starkbank');

// use
let privateKeyContent = `
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIPPTQnn7g+8DVhOcvqKxLrPFZ/hb0Ruc91amqiLruUESoAcGBSuBBAAK
oUQDQgAExK3pY/lsTcl+RqdRV2JVghiNEbEzFIsmJS4PcC5vjGLCLSw3Q0RLj2NH
JyS9YsVnOU5orR7RI4SY0FiEo4Hp3A==
-----END EC PRIVATE KEY-----
`

let user = new starkbank.Project({
    environment: 'sandbox',
    id: '5642664049377280',
    privateKey: privateKeyContent
});
starkbank.user = user;

export default starkbank;