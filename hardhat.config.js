require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_GOERLI_RPC_URL = process.env.ALCHEMY_GOERLI_RPC_URL || "";
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
