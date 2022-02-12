import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import {Route} from "react-router-dom"

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            {/* <Route path="/lastmovie" component={LastMovieInDb} /> */}
            {/* <LastMovieInDb /> */}
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            {/* <Route path="/genres" component={GenresInDb} /> */}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;