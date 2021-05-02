# bundle.bund
Create an online reservation that makes possible to reserve a team/person time NFT on blockchain.
There are lists of teams/persons on a market where customers can purchase NFTs posted by the Team/person.
 
The online reservation is managed by a group of administrators. Admins allow teams/persons to add time NFT to the reservation system. teams/persons can manage their account info and time NFTs. customers can visit teams/persons NFTs and purchase NFTs using cryptocurrency. 

## Story
Check out User Stories.
https://github.com/smartcontarct/bundle.bond/blob/master/user_stories.md

## Instructions

required: [Node](https://nodejs.org/dist/latest-v12.x/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)


```bash
git clone https://github.com/smartcontarct/bundle.bond.git

cd bundle.bund
```

```bash

yarn install

```

```bash

yarn start

```

> in a second terminal window:

```bash
cd bundle.bund
yarn deploy

```

### mnemonic 

create a mnemonic.txt file with your secret words and put it in the bundle.bund\packages\hardhat\ path
