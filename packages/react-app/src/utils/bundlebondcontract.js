import Web3 from "web3";
import { BundleBond } from "../abi/BundleBond.js";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
}
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, OPTIONS);

const bundleBondAddress = '0xe901A2a12270fAdF1AfA9ec2Ce2751E7bCa30BEF';//BondleBondAddress;
console.log('BundleBond');
console.log(BundleBond);
console.log('bundleBondAddress');
console.log(bundleBondAddress);
const bundlebondcontract = new web3.eth.Contract(BundleBond, bundleBondAddress);

export default bundlebondcontract;