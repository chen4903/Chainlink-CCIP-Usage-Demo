# Brief

This is a demo of using [Chainlink CCIP](https://docs.chain.link/ccip). If using this tutorial in a generation environment, please pay attention to security issues.

# Info

Chainlink CCIP [doc](https://docs.chain.link/ccip/supported-networks/testnet#ethereum-sepolia).

- sepolia router: `0xd0daae2231e9cb96b94c8512223533293c3693bf`
- BNB Link: `0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06`
- bnbtest router: `0x9527e2d01a3064ef6b50c1da1c0cc523803bcff2`
- bnbtest link: `0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06`
- sepolia chain selector: `16015286601757825753`
- bnb chain selector: `13264668187771770619`
- sepolia Link: `0x779877A7B0D9E8603169DdbD7836e478b4624789`
- BnM sepolia test network: `0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05`
- BnM bnb test network: `0xbFA2ACd33ED6EEc0ed3Cc06bF1ac38d22b36B9e9`

# Usage

Preparation: `npm i -D` to install dependencies

## send_message

run the project to make it: send "`Hello CCIP`" from bnb test network to sepolia test network

1. `npx hardhat run .\scripts\send_message\step1_deploy_Receiver.js --network sepolia`

2. `npx hardhat run .\scripts\send_message\step2_deploy_Sender.js --network bnbtest`

3. `npx hardhat run .\scripts\send_message\step3_send_link_to_Sender.js --network bnbtest`

4. `npx hardhat run .\scripts\send_message\step4_send_message.js --network bnbtest`

  > wait for a while, u can check the tx is successful or not in the [explorer](https://ccip.chain.link/msg/0xd6c87f30f1038046f6f251ff347d2db6dfe06f53350ef67d157b58b5d3ec6192)

5. `npx hardhat run .\scripts\send_message\step5_getMessage.js --network sepolia`

the output is like this:

```
get message in Receiver contract
send message successfully: Result(2) [
  '0xd6c87f30f1038046f6f251ff347d2db6dfe06f53350ef67d157b58b5d3ec6192',
  'Hello CCIP'
]
```

## send_erc20

run the project to make it: send to EOA from sepolia to bnb:

1. `npx hardhat run .\scripts\send_erc20\step1_getBnM.js --network sepolia`
2. `npx hardhat run .\scripts\send_erc20\step2_deploy_TokenTransferor_in_sepolia.js --network sepolia`
3. `npx hardhat run .\scripts\send_erc20\step3_send_BnM_to_TokenTransferor.js --network sepolia`
4. `npx hardhat run .\scripts\send_erc20\step4_send_link_to_TokenTransferor.js --network sepolia`
5. `npx hardhat run .\scripts\send_erc20\step5_transfer_BnM_from_sepolia_to_bnb_EOA.js --network sepolia`

  > wait for a while, u can check the tx is successful or not in the [explorer](https://ccip.chain.link/msg/0xecf1aae285f437be980a9b3fc90d9b839503e026295d5ce9e100bc7cf913efa3)

complete the above steps, continue to send to CA from sepolia to bnb:
1. `npx hardhat run .\scripts\send_erc20\step6_deploy_TokenTransferor_in_bnb.js --network bnbtest`
2. `npx hardhat run .\scripts\send_erc20\step7_transfer_BnM_from_sepolia_to_bnb_CA.js --network sepolia`

  > wait for a while, u can check the tx is successful or not in the [explorer](https://ccip.chain.link/msg/0x8f994b30199f0171aea191a8c6c42844dd7324a0493cca25c5d992af3c294f68)

3. `npx hardhat run .\scripts\send_erc20\step8_CA_withdraw_BnM_in_bnb.js --network bnbtest`

Then u will find that u have 2 BnM in bnb test network wallet while u lose 2 BnM in sepolia test network.

# Summarize

As of now (December 2, 2023), I think there are the following characteristics

- There are fewer supported main chain CCIPs: Arb, Base, Polygon. (Optimism doesn't support, but it is support before)
- every cross chain tx costs 20 minutes approximately, I think it can be faster











