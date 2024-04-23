const hre = require("hardhat");

async function main() {

   const MyContract = await hre.ethers.getContractFactory("SafeProxyFactory");
   const myContract = await MyContract.deploy('0xBF4417E6F1Bed2Be804F19B5e0289ea4b02F6170','0xf02dfD5568bC2149b6b5a119eEdBd76b100C3E82');

   await myContract.deployed();

   console.log(`Safe Factory deployed to ${myContract.address}`);


}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});