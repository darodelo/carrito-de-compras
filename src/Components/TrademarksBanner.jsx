
import "../Styles/trademarksBanner.css";

import React from 'react'

const TrademarksBanner = () => {
  return (
    <div className='trademarks-banner'>
        
        <div className='trademarks-img-banner'>
            <a href="#"> <img src="./disney-logo.svg" alt="Disney logo" height="75px" /> </a>
        </div>

        <div className='trademarks-img-banner'>
            <a href="#"> <img src="./marvel-logo.png" alt="Marvel logo" height="75px" /> </a>
        </div>
        
        <div className='trademarks-img-banner'>
             <a href="#"> <img src="./star-wars-logo.png" alt="Star Wars logo" height="75px" /> </a>
        </div>

        <div className='trademarks-img-banner'>
            <a href="#"> <img src="./harry-potter-logo.png" alt="Harry Potter logo" height="75px" /> </a>
        </div>

    </div>
  )
}

export default TrademarksBanner