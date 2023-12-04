const hre = require("hardhat");
const { BnMABI } = require("../../abi/BnM_sepolia-bnb.js");

async function SendBnM() {

    console.log("send 2 BnM to TokenTransferor contract");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const BnMContract = new hre.ethers.Contract("0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05", BnMABI, wallet);
    const tx = await BnMContract.transfer("0xfB0374E2eDdf73358c4587E21c0966cAcf2427E6", ethers.parseUnits('2', 'ether'));

    console.log("send 2 BnM successfully:", tx.hash); // 0x9feaf7b6b3221761cc661e0e9713a3cd70892b083ff19cabc16e9b07551ee5de
}

SendBnM();