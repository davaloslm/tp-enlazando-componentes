import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {Route} from "react-router-dom"
import GenresInDb from "./GenresInDb"

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          {/* <Route path="/genres" component={GenresInDb} /> */}
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
