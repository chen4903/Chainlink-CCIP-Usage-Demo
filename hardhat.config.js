require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const sepolia = process.env.sepolia;
const bnbtest = process.env.bnbtest;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: sepolia,
      accounts: [PRIVATE_KEY]
    },
    bnbtest: {
      url: bnbtest,
      accounts: [PRIVATE_KEY]
    }
  }
};