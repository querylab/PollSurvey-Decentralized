async function main() {

  const [deployer] = await ethers.getSigners();

  const Voting = await ethers.getContractFactory("PollSurvey");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["JOHN", "HOMER", "ELENA"], 90);// change the 90 minutes duration of the contract if you want to make the account to last longer



//Consol View
console.log("***********************************************************************************");
console.log("Deploying contracts with the account:", deployer.address);
console.log("Account balance:", (await deployer.getBalance()).toString());
console.log("***********************************************************************************\n");
console.log("Voting Contract Address\n ");
console.log(Voting_.address,"\n");
console.log("***********************************************************************************");



}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });