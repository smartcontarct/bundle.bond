import Web3 from "web3";
import { BundleBond } from "../abi/BundleBond.js";
import { BondleBondAddress } from "../contracts/BundleBond.address.js";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
}
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545", null, OPTIONS);

const bundleBondAddress = '0x6d4F1e96A1d1806f20315FeCA94A8Da8EBb10306';//BondleBondAddress;
console.log('BundleBond');
console.log(BundleBond);
console.log('bundleBondAddress');
console.log(bundleBondAddress);
const bundlebondcontract = new web3.eth.Contract(BundleBond, bundleBondAddress);

export default bundlebondcontract;