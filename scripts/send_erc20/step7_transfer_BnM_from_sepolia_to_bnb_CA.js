const hre = require("hardhat");
const { TokenTransferorABI } = require("../../abi/TokenTransferor");

async function transfer() {

    console.log("transfer 1 BnM from sepolia test network to bnb test network");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const TokenTransferorContract = new hre.ethers.Contract("0xfB0374E2eDdf73358c4587E21c0966cAcf2427E6", TokenTransferorABI, wallet);

    const tx1 = await TokenTransferorContract.whitelistChain("13264668187771770619", {gasLimit: 3000000});
    await tx1.wait();
    console.log("set whitelistChain:", tx1.hash); // 0x422e65839d05ebd97a866c3960cd7b3561ced8b223d737feeaa39bfdc914a797

    const tx2 = await TokenTransferorContract.transferTokensPayLINK(
        "13264668187771770619",
        "0x3E40FBab380A52F3f858FcBBCf1773cff9AD3202",
        "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
        ethers.parseUnits('1', 'ether'),
        {gasLimit: 3000000}
    );
    await tx2.wait();
    console.log("send 1 BnM successfully:", tx2.hash); // 0x84c138ff84657557e97706164ac960fe07f6421abbf91adc68e1c72dbaa44cd4
    
}

transfer();