require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_GOERLI_RPC_URL = process.env.ALCHEMY_GOERLI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
