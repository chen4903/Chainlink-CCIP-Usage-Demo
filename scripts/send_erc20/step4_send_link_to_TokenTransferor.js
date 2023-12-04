const hre = require("hardhat");
const { LinkABI } = require("../../abi/link.js");

async function SendLink() {
    // 在我们发送消息之前，我们需要给Sender一些link token作为手续费

    console.log("begin sending Link to TokenTransferor contract"); 

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const LinkContract = new hre.ethers.Contract("0x779877A7B0D9E8603169DdbD7836e478b4624789", LinkABI, wallet);
    const tx = await LinkContract.transfer("0xfB0374E2eDdf73358c4587E21c0966cAcf2427E6", ethers.parseUnits('1', 'ether'));

    console.log("send 1 Link successfully:", tx.hash); // 0xd1fb56256abe22a11edfaa3d46558cc5f1774290fdddc848c7c20fa536f78328
}

SendLink();