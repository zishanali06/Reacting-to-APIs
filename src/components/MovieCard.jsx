import React from 'react';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.movie.title,
            description: props.movie.description,
            url: props.movie.url,
            director: props.movie.director,
            producer: props.movie.producer,
            release: props.movie.release_date
         };
    }



    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="card my-2" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Release Date: {this.state.release}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Producer: {this.state.producer}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Director: {this.state.director}</h6>
                        <p className="card-text">{this.state.description}</p>
                        <a href={this.state.url} className="card-link">See Unique Endpoint for Movie</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;