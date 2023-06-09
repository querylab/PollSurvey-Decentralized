require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_SEPOLIA_URL = "URL ALCHEMY";
const PRIVATE_KEY = "METAMASK PRIVATE KEY";
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
