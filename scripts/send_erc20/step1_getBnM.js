const hre = require("hardhat");
const { BnM } = require("../../abi/BnM_sepolia-bnb.js");

async function getBnM() {

    console.log("mint 3 BnM for myself");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const BnMContract = new hre.ethers.Contract("0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05", BnM, wallet);

    const tx1 = await BnMContract.drip("0xd3E65149C212902749D49011B6ab24bba30D97c6");
    await tx1.wait();
    console.log("send message successfully:", tx1.hash); // 0xec9d44dcabc8aa27b6873d77f5fea552a5b0311c766b017480a261d3c2de2904

    const tx2 = await BnMContract.drip("0xd3E65149C212902749D49011B6ab24bba30D97c6");
    await tx2.wait();
    console.log("send message successfully:", tx2.hash); // 0x495e47771c257664c57fcb1138803bafd9de7a9e369ceb1010f484c4a6aeb300

    const tx3 = await BnMContract.drip("0xd3E65149C212902749D49011B6ab24bba30D97c6");
    await tx3.wait();
    console.log("send message successfully:", tx3.hash); // 0x4f10ea56b5320f8df4f82d4c6d070e6f85566d505c5da0a6a3e90570b4f7cd32
    
}

getBnM();