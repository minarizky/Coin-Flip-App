import React, { useState } from "react";
import Coin from "./Coin";

function CoinFlip() {
  const [flipResult, setFlipResult] = useState(null); // stores 'heads' or 'tails'
  const [totalFlips, setTotalFlips] = useState(0);    // total flips count
  const [headsCount, setHeadsCount] = useState(0);     // heads count
  const [tailsCount, setTailsCount] = useState(0);     // tails count

  // Function to simulate a coin flip
  const flipCoin = () => {
    const isHeads = Math.random() < 0.5;  // 50/50 chance
    const result = isHeads ? "heads" : "tails";
    
    setFlipResult(result);                // set the current flip result
    setTotalFlips(totalFlips + 1);        // increment total flips
    
    if (isHeads) {
      setHeadsCount(headsCount + 1);      // increment heads count
    } else {
      setTailsCount(tailsCount + 1);      // increment tails count
    }
  };

  return (
    <div className="CoinFlip">
      <h1>Let's Flip A Coin!</h1>
      <Coin side={flipResult} />            {/* Render the coin with current side */}
      <button onClick={flipCoin}>Flip Coin!</button>  {/* Button to flip the coin */}
      <p>Total flips: {totalFlips}</p>      {/* Show total flips */}
      <p>Heads: {headsCount}, Tails: {tailsCount}</p>  {/* Show heads/tails count */}
    </div>
  );
}

export default CoinFlip;
