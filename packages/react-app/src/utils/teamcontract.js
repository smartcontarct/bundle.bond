import Web3 from "web3";
import { TeamNFT } from "../abi/TeamNFT.js";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
}
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, OPTIONS);

const TeamAddress = '0x357741ef5135481f948b3DA5Da3F57Deb3656536';//BondleBondAddress;

const teamcontract = new web3.eth.Contract(TeamNFT, TeamAddress);

export default teamcontract;