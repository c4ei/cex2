truffle migrate --reset --network c4ei
account : brg.c4ei.net
site : ico.c4ei.net

MIG      : 0x484E55FD337Bff08761993A8AB19208ceDDaa764
CEIK     : 0x937BD55eE341F996cf7d61E99b639965929094b7
SAWONdex : 0xEb50C6494049B8c09d420eA852cD5695bdfC51b8

npm run seed-exchange
yarn seed-exchange --network c4ei

Token fetched 0x937BD55eE341F996cf7d61E99b639965929094b7
Exchange fetched 0xEb50C6494049B8c09d420eA852cD5695bdfC51b8

# LeskoExchange
>Lesko Exchange with CEIK ERC-20 standard token
>Video explanation [_here_](https://drive.google.com/file/d/13waCMZJIXLVzaYtnbivB_x1prBfJPPPY/view?usp=sharing). 

## 📁 Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
- The CEIK is an exchange for trading ETH/CEIK
- Connect with your wallet, deposit ETH or CEIK token and trade them
- User can create orders, fill and cancel them, also chart of ETH/CEIK price action is available


## Technologies Used (more in dependencies)
- React - version 16.13.1
- truffle - version 5.1.45
- web3 - version 1.2.6
- openzeppelin-solidity - version 2.1.3
- apexcharts - version 3.6.3
- chai - version 4.2.0
- redux - version 4.0.5
  

## Features
List the ready features here:
- User can connect to exchange via wallet and deposit / withdraw ETH or CEIK token
- User can create / cancell and fill orders
- User can buy / sell ETH or CEIK tokens
- User can check all trade history of the exchange
- User can see ETH / CEIK price action in integrated chart

## Screenshots
![Example screenshot](./helpers/Screenshot.png)


## Setup
## 📟 Setup
### 1. 💾 Clone/Download the Repository
### 2. 📦 Install Dependencies:
```
$ cd repository_file
$ npm install
```

After that you need to run your local blockchain. Open Ganache and in terminal run command:
```
truffle migrate --reset:
```
Or if you whant to deploy to test network you can run:
```
truffle migrate --reset --network matic
```
or
```
truffle migrate --reset --network goerli
```
To do some interactions exchange have script for fill some orders until exchange is not live-traded. Run
```
npm run seed-exchange
```
After that let's run:
```
npm run start
```
And at the end page will ask you to connect to your Metamask wallet. After you connected the setup is done!


## Project Status
Project is: _in progress_ 


## Room for Improvement

Room for improvement:
- Add more tokens for trading
- Add more time frames on chart 
- Hardhat migration
- Get liquidity, migrate to AMM version
- Improve UI and UX

## Contact
Created by [@SAWONV](https://www.linkedin.com/in/ivan-leskov-4b5664189/) - feel free to contact me!

