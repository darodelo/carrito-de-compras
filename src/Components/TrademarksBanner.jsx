
import "../Styles/trademarksBanner.css";

import React from 'react'

const TrademarksBanner = () => {
  return (
    <div className='trademarks-banner'>
        
        <div className='trademarks-img-banner'>
            <img src="./disney-logo.svg" alt="Disney logo" height="75px" />
        </div>

        <div className='trademarks-img-banner'>
            <img src="./marvel-logo.png" alt="Marvel logo" height="75px" />
        </div>
        
        <div className='trademarks-img-banner'>
            <img src="./star-wars-logo.png" alt="Star Wars logo" height="75px" />
        </div>

        <div className='trademarks-img-banner'>
            <img src="./harry-potter-logo.png" alt="Harry Potter logo" height="75px" />
        </div>

    </div>
  )
}

export default TrademarksBanner