import React from "react";
import PropTypes from "prop-types";

function Whale(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenWhaleClicked(props.id)}>
        <h3>{props.species}</h3>
        <p>{props.date}</p>
        <p>{props.location}</p>
      </div>
    </React.Fragment>
  )
}

Whale.propTypes = {
  species: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenWhaleClicked: PropTypes.func
};

export default Whale;