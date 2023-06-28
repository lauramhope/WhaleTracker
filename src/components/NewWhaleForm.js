import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

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
      <ReusableForm
        formSubmissionHandler={handleNewWhaleFormSubmission}
        buttonText="Add Whale" />
    </React.Fragment>
  );
}

NewWhaleForm.propTypes = {
  onNewWhaleCreation: PropTypes.func
};

export default NewWhaleForm;