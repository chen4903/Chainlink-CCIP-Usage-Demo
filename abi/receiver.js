module.exports.ReceiverABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "router",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "router",
          "type": "address"
        }
      ],
      "name": "InvalidRouter",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "messageId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "sourceChainSelector",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "text",
          "type": "string"
        }
      ],
      "name": "MessageReceived",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "messageId",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "sourceChainSelector",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "sender",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Client.EVMTokenAmount[]",
              "name": "destTokenAmounts",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct Client.Any2EVMMessage",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "ccipReceive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLastReceivedMessageDetails",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "messageId",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRouter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hello2",
          "type": "string"
        }
      ],
      "name": "setHello",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ];