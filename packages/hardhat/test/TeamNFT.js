

//jshint ignore: start

// contracts
const TeamNFT = artifacts.require("./TeamNFT.sol");
const WeekNFT = artifacts.require("./WeekNFT.sol");

// tools for overloaded function calls
const web3Abi = require('web3-eth-abi');
const web3Utils = require('web3-utils');

/**************************************
* Helpers
**************************************/

const logEvent = (func) => {
  const event = func({ _from: web3.eth.coinbase }, { fromBlock: 0, toBlock: 'latest' });
  event.watch(function(error, result){
    console.log('*** EVENT ***' + result.event);
    result.args.forEach((arg) => console.log(arg));
  });
}
const promisify = (inner) => new Promise((resolve, reject) =>
  inner((err, res) => {
    if (err) { reject(err) }
    resolve(res);
  })
);
const getBalance = (account, at) => promisify(cb => web3.eth.getBalance(account, at, cb));
const timeout = ms => new Promise(res => setTimeout(res, ms))

/**************************************
* Tests
**************************************/

contract('ComposableTopDown', function(accounts) {

  let teamNFT, alice = accounts[0], bob = accounts[1],weekTokenId,name = "Shahin",TeamUrl = "{[]}";

  /**************************************
  * NOTE
  *
  * Transferring composables requires a bytes of bytes32 in hex
  * to specify the receiving token index in the composable
  *
  * The following creates bytes of length 32 representing 1, 2 and 3
  **************************************/
  const bytes1 = web3Utils.padLeft(web3Utils.toHex(1), 32);
  const bytes2 = web3Utils.padLeft(web3Utils.toHex(2), 32);
  const bytes3 = web3Utils.padLeft(web3Utils.toHex(3), 32);

  it('should be deployed, TeamNFT', async () => {

    teamNFT = await  TeamNFT.deployed();

    //composable = await ComposableTopDown.new("okay", "tkn");
    //const receipt = await web3.eth.getTransactionReceipt(composable.transactionHash);
    //console.log("gas used:" + receipt.gasUsed)



    /**************************************
    * If you need event logging
    **************************************/

    // logEvent(composable.Received);
    // logEvent(composable.Added);
    // logEvent(composable.TransferChild);


    assert(teamNFT !== undefined, 'Composable team was not deployed');
  });

  it('should be deployed, weekNFT', async () => {
    weekNFT = await WeekNFT.deployed();
    assert(weekNFT !== undefined, 'weekNFT was not deployed');
  });


  it('should mint a 721 token, teamNFT', async () => {
    const tokenId = await teamNFT.mintTeamToken.call(alice,name,TeamUrl);
    assert(tokenId.equals(1), 'Composable teamNFT 721 token was not created or has wrong tokenId');
    const tx = await teamNFT.mintTeamToken(alice,name,TeamUrl);
  });

  it('should Get team data', async () => {
    const result = await teamNFT.getTeamById.call(1);
    assert.equal(result[0].toString(10), 1, 'id does not match the expected value');
    assert.equal(result[1], alice, 'address item does not match the expected value');
    assert.equal(result[2], name, 'name does not match the expected value');
    assert.equal(result[3], TeamUrl, 'TeamUrl does not match the expected value');
    assert.equal(result[4], true, 'exist does not match the expected value');
  });



  it('should mint a 721 token, weekNFT', async () => {
    const weekTokenId = await weekNFT.mint721.call(teamNFT.address,1,alice);
    assert(weekTokenId.equals(1), 'weekNFT 721 token was not created or has wrong tokenId');
    const tx = await weekNFT.mint721(teamNFT.address,1,alice, { from: alice, gas: 500000 });
    });

  // it('should safeTransferFrom weekNFT to teamNFT', async () => {
    
  //   const tx = await weekNFT.assignNFTToTeam(teamNFT.address,1,1,alice, { from: alice, gas: 500000 });
    
  //   assert(tx != undefined, 'no tx using safeTransferFrom');
  // });

  it('should own weekNFT, teamNFT', async () => {
    const owned = await teamNFT.childExists(weekNFT.address, 1);
    assert(owned, 'teamNFT does not own weekNFT');
  });

  it('should get owning token of teamNFT', async () => {
      const result = await teamNFT.ownerOfChild(weekNFT.address, 1);
      //console.log(result);
      //console.log("tokenID:"+tokenId);
      assert(result[1].equals(1), 'composable parent not found');
    });

  /**************************************
  * Checking array, should have added sampleNFT after transfer
  **************************************/

  it('should have 1 child contract address weekNFT', async () => {
    const contracts = await teamNFT.totalChildContracts.call(1);
    const contract = await teamNFT.childContractByIndex.call(1, 0);
    //we have to guess the child contract instance to find the address?
    //do we need to know the child contract address?
    //why can't we return the child contracts array?
    const tokenId = await teamNFT.childTokenByIndex.call(1,weekNFT.address,0);

    assert(tokenId.equals(1), 'call to composable teamNFT.childTokenByIndex failed or was wrong.');

    assert(contracts.toNumber() === 1 && contract === weekNFT.address, 'composable teamNFT does not have the right childs contract');
  });

  /**************************************
  * Transferring Composable "1" to Bob
  **************************************/

  it('should transfer composable teamNFT to bob', async () => {
    const tx = await teamNFT.transferFrom(alice, bob, 1);
  });

  it('should own the composable teamNFT, Bob', async () => {
    const address = await teamNFT.ownerOf.call(1);
    //const address = await composable.ownerOf(1);
    //console.log(address + " : " + alice + " : " + bob)
    assert(address == bob, 'composable teamNFT not owned by bob');
  });

  it('should transfer weekNFT to alice', async () => {
    const tx = await teamNFT.contract.transferChild['uint256,address,address,uint256'](1,alice, weekNFT.address, 1, { from: bob, gas: 500000 });
    assert(tx, 'Transaction undefined');
  });

  it('should own weekNFT, alice', async () => {
    const address = await weekNFT.ownerOf.call(1);
    assert(address == alice, 'alice does not own sampleNFT');
  });

  /**************************************
  * Checking arrays, should be removed from transfer
  **************************************/

  it('should NOT have a weekNFT contract', async () => {
    const contracts = await teamNFT.totalChildContracts.call(1);
    assert(contracts.toNumber() === 0, 'teamNFT has wrong number of child contracts');
  });

  it('should NOT have an child', async () => {
    const owned = await teamNFT.childExists(weekNFT.address, 1);
    assert(!owned, 'teamNFT owns a weekNFT and SHOULD NOT');
  });
  it('should Get Team Count', async () => {
    const teamCount = await teamNFT.getTeamCount.call();
    assert.equal(teamCount, 1, 'team count not correct');
  });





 });

//jshint ignore: end
