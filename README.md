# PollSurvey-Decentralized 🏛️🗳️

This is a prototype application that combines Solidity and ReactJS to implement voting on an Ethereum smart contract.Deployed on the Sepolia testnet ensures a reliable testing environment before deploying the solution on a main blockchain network.The application provides an intuitive interface where users can participate in voting transparently and securely. Solidity is used to implement the logic of the smart contract, while ReactJS is responsible for building an interactive user interface. This combination enables a seamless voting experience, supported by blockchain technology, and demonstrates the potential of implementing decentralized voting. 


## Setting Up
---
## 1. Clone the repository

## 2. Install dependencies

```bash
$ cd PollSurvey-Decentralized
$ npm install --save-dev hardhat
```
## 3. Change variables in Files
```bash
# hardhat.config.js
$ ALCHEMY_SEPOLIA_URL
$ PRIVATE_KEY
# src/constant.js
$ contractAddress
```
## 4. Deployment Solidity Contract Addresses
```bash
$ npx hardhat clean
$ npx hardhat compile
```
``` bash
$ npx hardhat run scripts/deploy.js --network sepolia
```
<a href="https://imgur.com/ck43qiu"><img src="https://i.imgur.com/ck43qiu.gif" title="source: imgur.com" /></a>

``` bash

#After deploying the PollSurvey.sol replace this address in src/constant.js file with the variable:

 const contractAddress = "0x3B206F76476cd61CeC566C0232E7ED2Eb229bD9F";

```

## 5. Localhost Deployment

``` bash

npm install 

npm start 

http://localhost:3000/

```
<a href="https://imgur.com/iRnVZhH"><img src="https://i.imgur.com/iRnVZhH.gif" title="source: imgur.com" /></a>





































