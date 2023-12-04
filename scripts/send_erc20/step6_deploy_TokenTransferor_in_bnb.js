const hre = require("hardhat");

async function deploy() {
  console.log("begin deploying TokenTransferor in bnb test network");

  const TokenTransferorFactory = await hre.ethers.getContractFactory("TokenTransferor");
  const TokenTransferor = await TokenTransferorFactory.deploy("0x9527e2d01a3064ef6b50c1da1c0cc523803bcff2", "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06");

  await TokenTransferor.waitForDeployment(); 
  console.log("the TokenTransferor address:", TokenTransferor.target); // 0x3E40FBab380A52F3f858FcBBCf1773cff9AD3202

}

deploy()