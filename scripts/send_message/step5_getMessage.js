const hre = require("hardhat");
const { ReceiverABI } = require("../../abi/receiver.js");

async function SendLink() {

    console.log("get message in Receiver contract");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const SenderContract = new hre.ethers.Contract("0x304091b316F9F7e2F20f2b3955938ECF2E2e59E3", ReceiverABI, rpc);
    const tx = await SenderContract.getLastReceivedMessageDetails();

    console.log("send message successfully:", tx); // 
}

SendLink();