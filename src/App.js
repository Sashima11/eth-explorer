import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import BlockList from './BlockList';

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

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [listBlock, setlistBlock] = useState();

  let listItems;

  useEffect(() => {
    

    // async function sBlockList(bn){
    //   setlistBlock(bn[0]);
    //   console.log(listBlock);
    // }

    // if(blockNumber > 0){
    //   getBlockList(blockNumber);
    // }
  });

  // async function getBlockList(bn) {
  //   if(bn>0){
  //     for(let i=bn;i>=bn-10;i--){
  //       blockList.push(await alchemy.core.getBlockWithTransactions(i));
  //     }      

  //     console.log(blockList[0]);
      
  //     sBlockNumbers(blockList);
      
  //     //BlockList();
  //   }
    
  // }
  // function sBlockNumbers(bl){
  //   for(let u=0; u<=bl.length;u++){
  //     blockNumbers.push(bl[u].number);      
  //   }
  // }

  
  // function BlockList(){
  //   listItems = blockList.map((blockList) =>
  //   <li>{blockList}</li>
  // );
  //   console.log(listItems);
  // }

  return <div className="App">
    <BlockList />
    {/* Block List: {listBlock} */}

    </div>;
}

export default App;
 