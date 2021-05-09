import Web3 from "web3";
import { TeamNFT } from "../abi/TeamNFT.js";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
}
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, OPTIONS);

const TeamAddress = '0xB8A1Dc81188Ae927A1C389DC1693e83F966207C7';//BondleBondAddress;

const teamcontract = new web3.eth.Contract(TeamNFT, TeamAddress);

export default teamcontract;