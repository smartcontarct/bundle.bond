# bundle.bond

/TODO: 
<div style="text-align:center"><img src="LOGO UPLOADED IN THE REPOSITORY" /></div>

Create an online reservation that makes possible to reserve a team/time slot as NFT on blockchain.
There are lists of teams on a market where customers can purchase NFTs posted by the Team.
 
The online reservation is managed by a group of administrators. Admins allow teams/persons to add time NFT to the reservation system. teams/persons can manage their account info and time NFTs. customers can visit teams/persons NFTs and purchase NFTs using cryptocurrency. 

## Story
Check out [User Stories](https://github.com/smartcontarct/bundle.bond/blob/master/user_stories.md).


## Instructions

required: [Node](https://nodejs.org/dist/latest-v12.x/), [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)


```bash
git clone https://github.com/smartcontarct/bundle.bond.git

cd bundle.bond

yarn install
```

### mnemonic 

create a `mnemonic.txt` file with your secret words and put it in the `\packages\hardhat` 

```bash

yarn start

```
This should open up the browser to `http://localhost:3000/` which you can interact with the smart contracts through an MVP UI. 


to deploy, in a second terminal window:

```bash
cd bundle.bond
yarn deploy

```


