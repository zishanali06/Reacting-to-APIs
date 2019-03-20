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
            .then((filmsarrayinjson) => filmsarrayinjson.json())
            .then((resultsfromabove) => {
                this.setState({
                    moviesArray: resultsfromabove
                });
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            this.state.moviesArray.map((movie, currentindex) => {
                return (<MovieCard movie={movie} key={currentindex} />)
            })
        );
    }
}

export default MoviesList;