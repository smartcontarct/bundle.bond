const { ethers } = require("hardhat");
const { use, expect, assert } = require("chai");
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

  describe("addAdmin()", function () {
    it("Should be able to add a new Admin", async function () {
      const adminName = "Admin Name";
      const [admin, teamOwner, customer]=await ethers.getSigners();
      await bundleBondContract.addAdmin(adminName,admin.address);
      expect(await bundleBondContract.getAdminName(admin.address)).to.equal(adminName);
    });

    // it("Should be able to detect an Admin", async function () {
    //   const adminName = "Admin Name";
    //   const [admin, teamOwner, customer]=await ethers.getSigners();
    //   await bundleBondContract.addAdmin(adminName,admin.address);
    //   //let receipt=await bundleBondContract.connect(admin).isAdmin();
    //   //console.log(receipt.logs[0]);
    //   await bundleBondContract.isAdmin();
    //   expect('isAdmin').to.be.calledOnContractWith(bundleBondContract, [admin.address]);
    //   //expect(bundleBondContract.connect(admin.address).isAdmin()).to.be.equal(true);
    // });

    it("Should be able to edit Admin name", async function () {
      const adminName = "Admin Name";
      const [admin, teamOwner, customer]=await ethers.getSigners();
      await bundleBondContract.addAdmin(adminName,teamOwner.address);
      const adminName2 = "Admin Name2";
      await bundleBondContract.editAdminName(adminName2,admin.address);
      expect(await bundleBondContract.getAdminName(admin.address)).to.equal(adminName2);
    });

  });

    describe("addTeamOwner()", function () {

      it("Should be able to add a new TeamOwner", async function () {
        const teamOwnerName = "Team Name";
        const [admin, teamOwner, customer]=await ethers.getSigners();
        await bundleBondContract.addTeamOwner(teamOwnerName,teamOwner.address);
        expect(await bundleBondContract.getTeamOwnerName(teamOwner.address)).to.equal(teamOwnerName);
      });

      it("Should be able to edit a TeamOwner name", async function () {
        const teamOwnerName = "Team Name";
        const [admin, teamOwner, customer]=await ethers.getSigners();
        await bundleBondContract.addTeamOwner(teamOwnerName,teamOwner.address);
        const teamOwnerName2 = "Team Name2";
        await bundleBondContract.editTeamOwnerName(teamOwnerName2,teamOwner.address);
        expect(await bundleBondContract.getTeamOwnerName(teamOwner.address)).to.equal(teamOwnerName2);
      });


    });


    describe("addTeam()", function () {

      it("Should be able to add a new Team NFT", async function () {
        const teamOwnerName = "TeamName";
        const [admin, teamOwner, customer]=await ethers.getSigners();
        const id=await bundleBondContract.addTeam(teamOwner.address,teamOwnerName,"metadata");
        //console.log(id);
        //expect(id).toString().to.equal(1);
        //expect(await bundleBondContract.getTeamCount()).to.equal(1);
        const receipt=await bundleBondContract.getTeamById(0);
        //console.log(receipt);
        //expect(receipt[1]).to.equal(teamOwner.address);
      });



      // it("Should be able to get a TeamNFT", async function () {
      //   const teamOwnerName = "Team Name";
      //   const [admin, teamOwner, customer]=await ethers.getSigners();
      //   await bundleBondContract.addTeamOwner(teamOwnerName,teamOwner.address);
      //   const teamOwnerName2 = "Team Name2";
      //   await bundleBondContract.editTeamOwnerName(teamOwnerName2,teamOwner.address);
      //   expect(await bundleBondContract.getTeamOwnerName(teamOwner.address)).to.equal(teamOwnerName2);
      // });


    });

  });

