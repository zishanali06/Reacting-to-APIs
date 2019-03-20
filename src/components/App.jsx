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
        this.handlePeopleClick = this.handlePeopleClick.bind(this);
    }

    handleFilmClick() {
        this.setState({
            displayMovies: "flex",
            //BELOW WAS JUST BONUS, IT REMOVED THE BUTTON ONCE PRESSED
            // removeFilmButton: "none",
            displayPeople: "none"
        })
        console.log(this);
    }

    handlePeopleClick() {
        this.setState({
            displayPeople: "flex",
            //BELOW WAS JUST BONUS, IT REMOVED THE BUTTON ONCE PRESSED
            // removePeopleButton: "none",
            displayMovies: "none"
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="mx-auto" />
                </div>
                <div className="row">
                    <button className="mx-auto" onClick={this.handleFilmClick} style={{display: this.state.removeFilmButton}}>Load Films</button>
                    <button className="mx-auto" onClick={this.handlePeopleClick} style={{display: this.state.removePeopleButton}}>Load People</button>
                </div>
                <div className="row moviegrid" style={{ display: this.state.displayMovies }}>
                    <h3 className="col-12 text-center mt-3">MOVIES THAT HAVE NEVER BEEN WATCHED:</h3>
                    <MoviesList />
                </div>
                <div className="row peoplegrid" style={{ display: this.state.displayPeople }}>
                    <h3 className="col-12 text-center mt-3">GOD KNOWS WHO THESE PEOPLE ARE:</h3>
                    <PeopleList />
                </div>
            </div>
        );
    }
}

export default App;