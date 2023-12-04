const hre = require("hardhat");

async function deploy() {
    console.log("begin deploying Sender in BNB test network");

    const SenderFactory = await hre.ethers.getContractFactory("Sender");
    const Sender = await SenderFactory.deploy("0x9527e2d01a3064ef6b50c1da1c0cc523803bcff2","0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06");

    await Sender.waitForDeployment(); 
    console.log("the Sender address:", Sender.target);  // 0x131Fb4Ae0d48eA304b5B2c7157B9879e7B0c20A9

}

deploy()