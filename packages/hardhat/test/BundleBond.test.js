const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");
let catchRevert = require("./exceptionsHelpers.js").catchRevert
const { waffle } = require("hardhat");
const { Contract } = require("@ethersproject/contracts");
const { deployContract } = waffle;


use(solidity);


describe("Bundle Bond", function () {

  


  let bundleBondContract;

  this.timeout(0);

  describe("BundleBond", function () {
    it("Should deploy BundleBond", async function () {
      const Team= await ethers.getContractFactory("TeamNFT");
      team = await Team.deploy();
      const Week= await ethers.getContractFactory("WeekNFT");
      week = await Week.deploy();

      const BundleBondContract = await ethers.getContractFactory("BundleBond");

 
      bundleBondContract = await BundleBondContract.deploy(team.address,week.address);
    });
  });

    describe("addTeamOwner()", function () {
      it("Should be able to set a new purpose", async function () {
        const teamOwnerName = "Team Name";
        const [admin, teamOwner, customer]=await ethers.getSigners();
        await bundleBondContract.addTeamOwner(teamOwnerName,teamOwner.address);
        expect(await bundleBondContract.getTeamOwnerName(teamOwner)).to.equal(teamOwnerName);
      });
    });


  });

