import Web3 from "web3";
import { WeekNFT } from "../abi/WeekNFT.js";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
}
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, OPTIONS);

const WeekAddress = '0xCB13517C19A74866D3E38FFDeB5FfC7Ef72a757B';//BondleBondAddress;

const weekcontract = new web3.eth.Contract(WeekNFT, WeekAddress);

export default weekcontract;