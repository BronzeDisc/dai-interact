const web3 = new web3('http://localhost:9545');
const accounts = await web3.eth.getAccounts();
const dai = new web3.eth.Contract(abi, address);

await dai.methods.transfer(receipient, amount, {from: fromAdress})