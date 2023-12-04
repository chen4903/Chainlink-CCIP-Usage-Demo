const hre = require("hardhat");

async function deploy() {
  console.log("begin deploying TokenTransferor in sepolia test network");

  const TokenTransferorFactory = await hre.ethers.getContractFactory("TokenTransferor");
  const TokenTransferor = await TokenTransferorFactory.deploy("0xd0daae2231e9cb96b94c8512223533293c3693bf", "0x779877A7B0D9E8603169DdbD7836e478b4624789");

  await TokenTransferor.waitForDeployment(); 
  console.log("the TokenTransferor address:", TokenTransferor.target); // 0xfB0374E2eDdf73358c4587E21c0966cAcf2427E6

}

deploy()