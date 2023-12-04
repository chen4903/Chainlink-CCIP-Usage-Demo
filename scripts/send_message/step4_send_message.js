const hre = require("hardhat");
const { SenderABI } = require("../../abi/sender.js");

async function SendLink() {

    console.log("Sender contract begins to send message");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.bnbtest ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const SenderContract = new hre.ethers.Contract("0x131Fb4Ae0d48eA304b5B2c7157B9879e7B0c20A9", SenderABI, wallet);
    const tx = await SenderContract.sendMessage(
        "16015286601757825753", 
        "0x304091b316F9F7e2F20f2b3955938ECF2E2e59E3", 
        "Hello CCIP",
        {gasLimit: 3000000} // 不加gaslimit会出现这个错误：Error: execution reverted (unknown custom error) (action="estimateGas", data=......
    );

    console.log("send message successfully:", tx.hash); // 0xae06eb3d5c6ba899b1cc2e187cbad06f0bb88183769fbb42278bb247e130ef00
}

SendLink();