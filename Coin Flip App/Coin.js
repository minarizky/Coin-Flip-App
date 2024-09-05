import React from "react";

function Coin({ side }) {
  return (
    <div className="Coin">
      {side && <img
        src={side === "heads" 
          ? "https://example.com/heads.jpg"  // replace with actual image URL
          : "https://example.com/tails.jpg"} // replace with actual image URL
        alt={side}
      />}
    </div>
  );
}

export default Coin;
