import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewWhaleForm(props){
  function handleNewWhaleFormSubmission(event){

  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewWhaleFormSubmission}>
        <input 
          type="text"
          name="whale"
          placeholder="whales"/>
        
      </form>
    </React.Fragment>
  )
}

NewWhaleForm.propTypes = {
  onNewWhaleCreation: PropTypes.func
};

export default NewWhaleForm;