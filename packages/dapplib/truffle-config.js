require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind concert gesture crew flower square'; 
let testAccounts = [
"0xe6d88ac6f2a147df0aa5b4070a7130f726d76a1c4b42777a33a50d609b314d78",
"0x31d4e9edd8342cd6bf4db8036f1fc0816dbcc87dc3c2e2d63491812b61a394c7",
"0xd283a7aeb715136c9ff4d570442edb5209b38f36acdf557f77effe79ae1f63d9",
"0x348229637500c8372ec5b5428d282fa8b2390b5bdf3f651696630e7887fc01ae",
"0x0978be0a3bd30b49f3020715ea4f22b6fbd0a912100355d8a2c869332bc0c817",
"0x55914b110d532f275f1788d8d142a9c2dfa14dfaa8eb12e152ad683083b0d154",
"0x0a1a8168e41f2d0eefbce182f834f5cfc71dac93be7dc735392a38742a575be1",
"0x6783a98305a29de868fb5874a3a4f052ada25f63c14975f047bd607b729cc6da",
"0xf442430624686d335e9579ab151a767e3eedf158c83f06f6ca2ffa90293f7047",
"0xfc8b36011985f0e1bdb1953199c185fca1645b3d1282ab0cd7d773b87d59e30e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
