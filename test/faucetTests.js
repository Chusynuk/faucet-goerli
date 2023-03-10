const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Faucet", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy();
    let withdrawAmount = ethers.utils.parseUnits("1", "ether");

    const [signer, signer2] = await ethers.getSigners();

    console.log("Signer 1 address: ", signer.address);
    return { faucet, signer, withdrawAmount };
  }

  it("should deploy and set the signer correctly", async function () {
    const { faucet, signer } = await loadFixture(deployContractAndSetVariables);

    expect(await faucet.owner()).to.equal(signer.address);
  });

  it("should NOT allow to withdraw more than 0.1ETH at a time", async function () {
    const { faucet, withdrawAmount } = await loadFixture(
      deployContractAndSetVariables
    );

    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted;
  });

  it("should call destroyFaucet if ONLY contract owner calls it", async function () {
    const { faucet } = await loadFixture(deployContractAndSetVariables);
  });
});
