  
const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require('./config.json');

module.exports = {
  compilers: {
    solc: {
      version: '^0.6.6'
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 100000000
    },

    // ganache-cli -l 100000000 -m "mnemonic" -h "192.168.100.150" -v
    localhost: {
      host: "192.168.100.150",
      port: 8545,
      network_id: "*",
      gas: 100000000
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(config.rinkeby_mnemonic, `https://rinkeby.infura.io/v3/${config.rinkeby_infura_api_key}`);
      },
      network_id: '4',
      gas: 10000000
    }
  }
};