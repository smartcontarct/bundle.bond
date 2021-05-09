export const BundleBond = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "AddCustomer",
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
    "constant": false,
    "inputs": [
      {
        "name": "_customerName",
        "type": "string"
      },
      {
        "name": "_customerAddress",
        "type": "address"
      }
    ],
    "name": "addCustomer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
        "name": "teamName",
        "type": "string"
      },
      {
        "name": "metadata",
        "type": "string"
      }
    ],
    "name": "addTeam",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CreateProject",
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