import React from 'react';
import WhaleList from './WhaleList';
import NewWhaleForm from "./NewWhaleForm";
import WhaleDetail from './WhaleDetail';
// import EditWhaleForm from './EditWhaleForm';

class WhaleControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainWhaleList: [],
      selectedWhale: null
    };
  }

  handleChangingSelectedWhale = (id) => {
    const selectWhale = this.state.mainWhaleList.filter(whale => whale.id === id)[0];
    this.setState({selectedWhale: selectWhale});
  }
  // OLD HANDLE CLICK for reference
  // handleClick = () => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }

  
  handleClick = () => {
    if(this.state.selectedWhale != null){
      this.setState({
        formVisibleOnPage: false,
        selectedWhale: null
      });
    }else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
  }
  }

  handleEditingWhaleInList = (whaleToEdit) => {
    const editedMainWhaleList = this.state.mainWhaleList
      .filter(whale => whale.id !== this.state.selectedWhale.id)
      .concat(whaleToEdit);
    this.setState({
      mainWhaleList: editedMainWhaleList,
      editing: false,
      selectedWhale: null
    });
  }

  handleAddNewWhaleToList = (newWhale) => {
    const newWhaleList = this.state.mainWhaleList.concat(newWhale);
    this.setState({mainWhaleList: newWhaleList,
    formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedWhale != null){
      currentlyVisibleState = <WhaleDetail whale={this.state.selectedWhale} />
      buttonText = "Return to Ticket List";
    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWhaleForm onNewWhaleCreation={this.handleAddNewWhaleToList} />;
      buttonText = "Return to Whale List";
    } else {
      currentlyVisibleState = <WhaleList whaleList={this.state.mainWhaleList} onWhaleSelection={this.handleChangingSelectedWhale} />;
      buttonText = "Add Whale";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default WhaleControl;