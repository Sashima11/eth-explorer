import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
  
  // In this week's lessons we used ethers.js. Here we are using the
  // Alchemy SDK is an umbrella library with several different packages.
  //
  // You can read more about the packages here:
  //   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
  const alchemy = new Alchemy(settings);

  function BlockList() {
    const [blockNumber, setBlockNumber] = useState();
    const [listBlock, setListBlock] = useState();
    const blockList = [];
    let block = {};
  
    useEffect(() => {
      async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
        return blockNumber;
      }

      async function getLastTenBlocks(){
        const bn = getBlockNumber();
        //console.log(blockNumber);
        if(blockNumber > 0 && blockNumber !== undefined){
          for(let i=blockNumber;i>=blockNumber-10;i--){
            block = await alchemy.core.getBlockWithTransactions(i);
            blockList.push(block);
          }
          console.log(blockList[0]);
          setListBlock(blockList);
          //console.log(listBlock);
        }
      }
      getLastTenBlocks();
    });

    // if(blockList.length<0){
    //   for(let i=blockNumber;i>=blockNumber-10;i--){
    //     blockList.push(alchemy.core.getBlockWithTransactions(i));
    //   }
    //   setListBlock(blockList);
    //   console.log(listBlock);
    // }
  
    return <div className="App">
       Block Number: {}
       Block List: {listBlock?.map(listBlock => <div>{listBlock.number}</div>)}
      </div>;
  }
  
  export default BlockList;