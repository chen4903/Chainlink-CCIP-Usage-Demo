const hre = require("hardhat");
const { LinkABI } = require("../../abi/link.js");

async function SendLink() {
    // 在我们发送消息之前，我们需要给Sender一些link token作为手续费

    console.log("begin sending Link to Sender contract");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.bnbtest ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const LinkContract = new hre.ethers.Contract("0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06", LinkABI, wallet);
    const tx = await LinkContract.transfer("0x131Fb4Ae0d48eA304b5B2c7157B9879e7B0c20A9", ethers.parseUnits('0.5', 'ether'));

    console.log("send 0.5 Link successfully:", tx.hash); // 0xc5fa1fd3d669784d4cedb13a0ff708dcd861cf5db88378afa43503fa8150f313
}

SendLink();