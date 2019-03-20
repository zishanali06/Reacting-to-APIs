import React from 'react';
import Movieslist from './MoviesList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="col-12 text-center">Reacting To Api's</h1>
                <h3 className="col-12 text-center">Best Movies Ever Made Below!</h3>
            </div>
            <div className="row moviegrid">
                <Movieslist />
            </div>
        </div>
    )
} 

export default App;