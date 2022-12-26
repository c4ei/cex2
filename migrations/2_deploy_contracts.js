const Token = artifacts.require("CEIK");
const Exchange = artifacts.require("SAWONdex");

module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();
  await deployer.deploy(Token);

  const feeAccount = accounts[0];
  const feePercent = 10;

  await deployer.deploy(Exchange, feeAccount, feePercent);
};
