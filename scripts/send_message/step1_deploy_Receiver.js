const hre = require("hardhat");

async function deploy() {
  console.log("begin deploying Receiver in sepolia test network");

  const ReceiverFactory = await hre.ethers.getContractFactory("Receiver");
  const Receiver = await ReceiverFactory.deploy("0xd0daae2231e9cb96b94c8512223533293c3693bf");

  await Receiver.waitForDeployment(); 
  console.log("the Receiver address:", Receiver.target); // 0x304091b316F9F7e2F20f2b3955938ECF2E2e59E3

}

deploy()