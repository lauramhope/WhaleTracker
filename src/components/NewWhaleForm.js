import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewWhaleForm(props){
  function handleNewWhaleFormSubmission(event){
    event.preventDefault();
    props.onNewWhaleCreation({
      species: event.target.species.value,
      location: event.target.location.value,
      date: event.target.date.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewWhaleFormSubmission}>
        <input 
          type="text"
          name="species"
          placeholder="type of whale"/>
        <input 
          type="text"
          name="location"
          placeholder="location spotted"/>
        <input 
          type="text"
          name="date"
          placeholder="some date"/>
        <button type='submit'>Submit Whale</button>
      </form>
    </React.Fragment>
  );
}

NewWhaleForm.propTypes = {
  onNewWhaleCreation: PropTypes.func
};

export default NewWhaleForm;