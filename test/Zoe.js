const { assert } = require("chai");

describe("Escrow", function() {
  const deposit = ethers.utils.parseEther("1");
  beforeEach(async () => {
    depositor = ethers.provider.getSigner(0);
    const Zoe = await ethers.getContractFactory("Zoe");
    zoe = await Zoe.deploy()
    await zoe.deployed();

  });

  it("should be deployed with 100 coins in balance", async function() {
    let balance = await zoe._initial_supply();
    assert.equal(balance.toString(), 100000000000000000000);
  });

  it("Should send tokens to other addresses", async function(){
    //const friend1Signer = ethers.provider.getSigner(1);
    //const friend2Signer = ethers.provider.getSigner(2);
    [signerAddress, friend1SignerAddr,friend2SignerAddr] = await ethers.provider.listAccounts();
    const airdropAddress = [friend1SignerAddr, friend2SignerAddr];
    const friend1SignerAddrBalanceBefore = await zoe.balanceOf(friend1SignerAddr);
    console.log(friend1SignerAddrBalanceBefore.toString());

    for(let i=0; i< airdropAddress.length ; i++){
      await zoe.transfer(airdropAddress[i],10);
    }

    const friend1SignerAddrBalanceAfter = await zoe.balanceOf(friend1SignerAddr);
    console.log(friend1SignerAddrBalanceAfter.toString());
    assert.equal(friend1SignerAddrBalanceAfter.toString(), 10);
  });


});
