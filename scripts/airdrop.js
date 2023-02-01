const tokenAddress = '0x41eEf3A414FE01251165b773F3307B0B7eD694Eb';
const airdrop = [
  '0xc56350e68287b312188e9dBA22e0539C671F8305',
  '0x5E7277Fd70cc8fec0D3c0422cCb1411d377BC39b',
  '0x975baE0A682C90d03684948071930DD187DE89be',
  '0x35563c837A364A8BceB4D973EbEb9070A55e7Ab0',
  '0xce166b916131dF4022Ad657462ACC33DeD1F24B8',
  '0x818E17DA48909c752c1F26f833A200b9B8BeE55C',
  '0x5a07c62A6AE97230dEA444ed97D10809769c0Aec',
  '0x1D986854784e9bB1351Cd239f6563edC474463F6',
  '0x46bE0efD306E7Eba9143c16FdD68B0D4323Dc7F7',
  '0xd3ea94B53A8E877F3ca6eB8dD9210749c2995B7E'
];

async function main() {


  const token = await ethers.getContractAt("Zoe", tokenAddress);

  for(let i=0; i<airdrop.length ;i++){
    await token.transfer(airdrop[i],ethers.utils.parseEther("1"))
  }



}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
