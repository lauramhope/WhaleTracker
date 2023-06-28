import React from 'react';
import PropTypes from 'prop-types';

function WhaleDetail(props){
  return (
    <React.Fragment>
      <h1>Whale Detail</h1>
      <h3>{props.whale.species}</h3>
      <h3>{props.whale.location}</h3>
      <h3>{props.whale.date}</h3>
      <button onClick={props.onClickingEdit}>Update Whale</button>
    </React.Fragment>
  );
}

WhaleDetail.propTypes = {
  whale: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default WhaleDetail;