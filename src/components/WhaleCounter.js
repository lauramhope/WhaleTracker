import React from 'react';
import PropTypes from 'prop-types';

function WhaleCounter(props){

  let whaleCounterText = null;
  if(props.amountOfWhales === 0){
    whaleCounterText = "Uh-oh there have been no sightings of whales recently";
  }else {
    whaleCounterText = `There are currently ${props.amountOfWhales} Whale sighting(s)`;
  }

  return(
    <React.Fragment>
      <h3>{whaleCounterText}</h3>
    </React.Fragment>
  )
}


export default WhaleCounter;