import React from 'react';
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArray: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            //BELOW THEN IS TO CHANGE THE JSON STRING RECEIVED INTO AN ARRAY OF OBJECTS WE CAN USE IN JAVASCRIPT
            .then((filmsarrayinjson) => filmsarrayinjson.json())
            //BELOW TAKES RESULT ARRAY OF OBJECTS FROM ABOVE FUNCTION AND UPDATES THE peopleArray STATE WITH THE ARRAY
            .then((resultsfromabove) => {
                this.setState({
                    moviesArray: resultsfromabove
                });
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            //MAPPING THRU THE ARRAY AND DISPLAYING A MovieCard COMPONENT WITH EACH OBJECT IN ARRAY
            this.state.moviesArray.map((movie, currentindex) => {
            return (<MovieCard movie={movie} key={currentindex} />)
        }));
    }
}

export default MoviesList;