const hre = require("hardhat");
const { TokenTransferorABI } = require("../../abi/TokenTransferor");

async function transfer() {

    console.log("transfer 1 BnM from sepolia test network to bnb test network");

    const rpc = new hre.ethers.JsonRpcProvider( process.env.sepolia ) ;
    
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, rpc);
    
    const TokenTransferorContract = new hre.ethers.Contract("0xfB0374E2eDdf73358c4587E21c0966cAcf2427E6", TokenTransferorABI, wallet);

    const tx1 = await TokenTransferorContract.whitelistChain("13264668187771770619", {gasLimit: 3000000});
    await tx1.wait();
    console.log("set whitelistChain:", tx1.hash); // 0xf9771bcde490538b791d22c5ef83aa615ce6a0d6589a78aec394562f3c34f3fb

    const tx2 = await TokenTransferorContract.transferTokensPayLINK(
        "13264668187771770619",
        "0xd3E65149C212902749D49011B6ab24bba30D97c6",
        "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
        ethers.parseUnits('1', 'ether'),
        {gasLimit: 3000000}
    );
    await tx2.wait();
    console.log("send 1 BnM successfully:", tx2.hash); // 0xbed21ae4cf3176865b0b08130e2c46b12682d7407436b0f7753453e8eb058068
    
}

transfer();

// message id: 0xecf1aae285f437be980a9b3fc90d9b839503e026295d5ce9e100bc7cf913efa3
// source tx
// eth: 0xbed21ae4cf3176865b0b08130e2c46b12682d7407436b0f7753453e8eb058068
// bnb: 0x870803b866f5960ecb62b0969afee514b4b0959fac8d5349fe496c9e25e92135