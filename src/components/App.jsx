import React from 'react';
import MoviesList from './MoviesList';
import PeopleList from './PeopleList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMovies: "none",
            removeFilmButton: "inline-block",
            displayPeople: "none",
            removePeopleButton: "inline-block"
        }
        this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    handleFilmClick() {
        this.setState({
            displayMovies: "flex",
            removeFilmButton: "none"
        })
        console.log(this);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="mx-auto" />
                </div>
                <div className="row">
                    <button className="mx-auto" onClick={this.handleFilmClick} style={{display: this.state.removeFilmButton}}>Load Films</button>
                </div>
                <div className="row moviegrid" style={{ display: this.state.displayMovies }}>
                    <MoviesList />
                </div>
                <div className="row peoplegrid" style={{ display: "flex" }}>
                    <PeopleList />
                </div>
            </div>
        );
    }
}

export default App;