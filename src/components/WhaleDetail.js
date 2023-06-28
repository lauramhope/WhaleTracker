import React from 'react';
import PropTypes from 'prop-types';

function WhaleDetail(props){
  return (
    <React.Fragment>
      <h1>Whale Detail</h1>
      <h3>{props.whale.species}</h3>
      <h3>{props.whale.location}</h3>
      <h3>{props.whale.date}</h3>
    </React.Fragment>
  );
}

WhaleDetail.propTypes = {
  whale: PropTypes.object
};

export default WhaleDetail;