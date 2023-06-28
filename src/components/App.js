import './App.css';
import React from 'react';
import Header from './Header';
import WhaleControl from "./WhaleControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <WhaleControl />
      </div>
    </React.Fragment>
  );
}

export default App;
