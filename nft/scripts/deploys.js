// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const Contract = await hre.ethers.getContractFactory("NFTStaking");
    const contract = await Contract.deploy("0x6473eda92925Ae5b5976bce91ec737d55E126EAF", "0x4CC18081Cd6365aa0647455582e1F24f228833E5");

    await contract.deployed();

    console.log("NFTStaking deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });