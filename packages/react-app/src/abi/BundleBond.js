export const BundleBond = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_adminName",
        "type": "string"
      },
      {
        "name": "_adminAddress",
        "type": "address"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "checkRole",
    "outputs": [],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "teamOwner",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "_temDes",
        "type": "string"
      },
      {
        "name": "_teamLoc",
        "type": "string"
      },
      {
        "name": "metadata",
        "type": "string"
      }
    ],
    "name": "addTeam",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_adminName",
        "type": "string"
      },
      {
        "name": "_adminAddress",
        "type": "address"
      }
    ],
    "name": "editAdminName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teamTokenId",
        "type": "uint256"
      },
      {
        "name": "userAddress",
        "type": "address"
      },
      {
        "name": "metadata",
        "type": "string"
      },
      {
        "name": "_WeekNo",
        "type": "uint256"
      },
      {
        "name": "_Year",
        "type": "uint256"
      }
    ],
    "name": "addWeek",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_adminAddress",
        "type": "address"
      }
    ],
    "name": "getAdminName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "weekTokenId",
        "type": "uint256"
      },
      {
        "name": "bidder",
        "type": "address"
      },
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "placeBidOnWeekNFT",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_projectAddress",
        "type": "address"
      }
    ],
    "name": "AddProjectToResume",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teamOwnerName",
        "type": "string"
      },
      {
        "name": "_teamOwnerAddress",
        "type": "address"
      }
    ],
    "name": "addTeamOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teamOwnerName",
        "type": "string"
      },
      {
        "name": "_teamOwnerAddress",
        "type": "address"
      }
    ],
    "name": "editTeamOwnerName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "isTeamOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_teamOwnerAddress",
        "type": "address"
      }
    ],
    "name": "getTeamOwnerName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "weekTokenId",
        "type": "uint256"
      },
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferWeekNFTOnBid",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTeamCount",
    "outputs": [
      {
        "name": "teamCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "isAdmin",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "weekId",
        "type": "uint256"
      }
    ],
    "name": "getWeekById",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "teamId",
        "type": "uint256"
      },
      {
        "name": "weekOwner",
        "type": "address"
      },
      {
        "name": "exists",
        "type": "bool"
      },
      {
        "name": "WeekUrl",
        "type": "string"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "WeekNo",
        "type": "uint256"
      },
      {
        "name": "Year",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "offerID",
        "type": "uint256"
      }
    ],
    "name": "acceptAnOffer",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "teamTokenId",
        "type": "uint256"
      },
      {
        "name": "weekTokenId",
        "type": "uint256"
      }
    ],
    "name": "purchaseWeekOfTeam",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "teamId",
        "type": "uint256"
      }
    ],
    "name": "getTeamById",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "teamOwner",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "TeamUrl",
        "type": "string"
      },
      {
        "name": "exists",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "weekTokenId",
        "type": "uint256"
      }
    ],
    "name": "makeAnOffer",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "teamTokenId",
        "type": "uint256"
      },
      {
        "name": "weekTokenId",
        "type": "uint256"
      },
      {
        "name": "to",
        "type": "address"
      }
    ],
    "name": "sellWeekNFT",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_team",
        "type": "address"
      },
      {
        "name": "_week",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "role",
        "type": "string"
      }
    ],
    "name": "RoleAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "role",
        "type": "string"
      }
    ],
    "name": "RoleRemoved",
    "type": "event"
  }
];