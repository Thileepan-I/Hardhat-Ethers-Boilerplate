require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,   
      },
      
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: "G2PQQ9KTX12QTRZ5TMSNHZ4PKM4SGW7639",//bnb
    // apiKey: "7XBNM7I42PJW8NP8GDT1475CTC6BRBAXMZ",//polygon

    // J6XX5W1D135S9Y9HQ5RNFCXSTZE4N5H1NJ
    // apiKey: "J6XX5W1D135S9Y9HQ5RNFCXSTZE4N5H1NJ",
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [':ERC20$'],
  },
  defaultNetwork:"testnet",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 5000000000,
      allowUnlimitedContractSize: true,
      accounts: [
        `736a61c7b4b6bd0a4b8fb66e5d76ac69329d7c8f4553063716c01f07364742cc`,
      ],
    },
    
  },
};













