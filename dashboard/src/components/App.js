import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';
import {Route, Switch} from "react-router-dom"
import GenresInDb from "./GenresInDb"
import Chart from "./Chart"
import LastMovieInDb from "./LastMovieInDb"
import TopBar from "./TopBar"
import ContentRowMovies from "./ContentRowMovies"
import Footer from "./Footer"

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <div className='content'>
            <TopBar />
            <ContentRowMovies />
            {/* Inicio de campo de muestra */}
            <div className='center'>
              <Switch>
                <Route path='/' exact/>
                <Route path='/lastmovie' component={LastMovieInDb}/>
                <Route path='/genres' component={GenresInDb}/>
                <Route path='/content' component={Chart}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
            {/* Fin de campo de muestra */}
            <Footer />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
