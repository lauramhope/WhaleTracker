import React from "react";
import Whale from "./Whale";
import PropTypes from "prop-types";

function WhaleList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.whaleList.map((whale) =>
        <Whale
          whenWhaleClicked = { props.onWhaleSelection }
          species={whale.species}
          location={whale.location}
          date={whale.date}
          id={whale.id}
          key={whale.id}/>
      )}
    </React.Fragment>
  );
}

WhaleList.propTypes = {
  whaleList: PropTypes.array,
  onWhaleSelection: PropTypes.func
};

export default WhaleList;