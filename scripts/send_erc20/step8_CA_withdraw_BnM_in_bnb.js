const hre = require("hardhat");
const { TokenTransferorABI } = require("../../abi/TokenTransferor");

async function transfer() {

    console.log("transfer 1 BnM from sepolia test network to bnb test network");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.bnbtest ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const TokenTransferorContract = new hre.ethers.Contract("0x3E40FBab380A52F3f858FcBBCf1773cff9AD3202", TokenTransferorABI, wallet);

    const tx = await TokenTransferorContract.withdrawToken(
        "0xd3E65149C212902749D49011B6ab24bba30D97c6",
        "0xbFA2ACd33ED6EEc0ed3Cc06bF1ac38d22b36B9e9"
    );
    await tx.wait();
    console.log("send 1 BnM successfully:", tx.hash); // 0xa45183e9205ef87b3dd98fd177f6bf5a70fec351ebf744e91c340de633c63587
    
}

transfer();

// message id: 0x8f994b30199f0171aea191a8c6c42844dd7324a0493cca25c5d992af3c294f68
// source tx
// eth: 0x84c138ff84657557e97706164ac960fe07f6421abbf91adc68e1c72dbaa44cd4
// bnb: 0xf3699744c3a88a0e6fd45de42135332efdb7160f09ae2bc3accdb5f65729f24c