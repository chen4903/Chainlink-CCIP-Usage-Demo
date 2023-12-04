# Info

Chainlink CCIP doc: https://docs.chain.link/ccip/supported-networks/testnet#ethereum-sepolia

- sepolia router: `0xd0daae2231e9cb96b94c8512223533293c3693bf`
- Link: `0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06`
- bnbtest router: `0x9527e2d01a3064ef6b50c1da1c0cc523803bcff2`
- bnbtest link: `0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06`
- sepolia chain selector: `16015286601757825753`

# usage

## send_message

run the project to make it: send "send Hello CCIP from bnb test network to sepolia test network"

1. `npx hardhat run .\scripts\send_message\step1_deploy_Receiver.js --network sepolia`

2. `npx hardhat run .\scripts\send_message\step2_deploy_Sender.js --network bnbtest`

3. `npx hardhat run .\scripts\send_message\step3_send_link_to_Sender.js --network bnbtest`

4. `npx hardhat run .\scripts\send_message\step4_send_message.js --network bnbtest`

  > wait for a while, u can check the tx is successful or not in explorer: https://ccip.chain.link/msg/0xd6c87f30f1038046f6f251ff347d2db6dfe06f53350ef67d157b58b5d3ec6192

5. `npx hardhat run .\scripts\send_message\step5_getMessage.js --network sepolia`

the output is like this:

```
get message in Receiver contract
send message successfully: Result(2) [
  '0xd6c87f30f1038046f6f251ff347d2db6dfe06f53350ef67d157b58b5d3ec6192',
  'Hello CCIP'
]
```

