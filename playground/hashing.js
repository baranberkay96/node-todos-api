const {SHA256} = require('crypto-js');

const message = "I am user 3";

const hash = SHA256(message).toString();

console.log(hash);