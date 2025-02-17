const base32 = require('base32.js');

// Encoded string
const encodedString = "KMYFMYKSIZGTCU32JJEFI222JBKVM4CEKNKXIYKXNRNFIVRQJZKFIMCKKNJEKVSPKJDFES2SNNLEQV2UKZKVEVLUJ5IWWYZQK5LEUVKTGBNFKVTLMRHFKMLEJBLGWZCIKUYUMTKTNN2E6UZRKJCFK22OKNKUK4CEKZCWYVKTGBLEWUTKKJLE23CKIRJWWZCHKRCWIVSVNN4EW";

// Decode the Base32 string
const decodedBytes = base32.decode(encodedString);

// Convert the decoded bytes to a UTF-8 string
const decodedString = new TextDecoder('utf-8').decode(decodedBytes);

console.log(decodedString);