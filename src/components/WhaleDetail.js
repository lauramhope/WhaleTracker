import React from 'react';
import PropTypes from 'prop-types';

function WhaleDetail(props){
  const { whale } = props;

  return (
    <React.Fragment>
      <h1>Whale Detail</h1>
      <h3>{whale.species}</h3>
      <h3>{whale.location}</h3>
      <h3>{whale.date}</h3>
      <button onClick={()=> props.onClickingDelete(whale.id)}>Delete Whale</button>
      <button onClick={props.onClickingEdit}>Update Whale Details</button>
    </React.Fragment>
  );
}

WhaleDetail.propTypes = {
  whale: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default WhaleDetail;