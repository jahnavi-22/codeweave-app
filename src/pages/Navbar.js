import React from "react";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DownloadIcon } from "@chakra-ui/icons";




function Navbar({ tabCount, setTabCount, changestateblob }) {

  const handleIncrement = () => {
    setTabCount(tabCount + 1);
  };

  const handleDecrement = () => {
    if (tabCount > 1) {
      setTabCount(tabCount - 1);
    }
  };

  const changefunc = () => {
    changestateblob(true);
  };

  return (
   
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div><IconButton variant='outline' colorScheme='teal' aria-label='increment' icon={<AddIcon />} onClick={handleIncrement} /> </div>
        <div><IconButton variant='outline' colorScheme='teal' aria-label='decrement' icon={<MinusIcon />} onClick={handleDecrement} /></div>
        <div><IconButton variant='outline' colorScheme='teal' aria-label='download' icon={<DownloadIcon />} onClick={changefunc} />  </div>
    </div>
   
     
  );
}

export default Navbar;
