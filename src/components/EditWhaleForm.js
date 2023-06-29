import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

EditWhaleForm.propTypes = {
  whale: PropTypes.object,
  onEditWhale: PropTypes.func
};

function EditWhaleForm(props) {
  const { whale } = props;

  function handleEditWhaleFormSubmission(e){
    e.preventDefault();
    props.onEditWhale({species: e.target.species.value,
       location: e.target.location.value, 
       date: e.target.date.value,
       event: props.counter, 
       id: whale.id});
  }

    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleEditWhaleFormSubmission}
          buttonText="Edit Whale" />
      </React.Fragment>
    );
}

export default EditWhaleForm;