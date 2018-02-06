import React from 'react';

import Dev from '../Data/Dev';

export default class MovieDetails extends React.Component {

    render () {
        // let movie = Dev.movieList.find((movie) => movie.id === this.props.id);

        let movie = this.props.movie;

        if(!movie) {
            return (<div className="display-middle">Select a movie to view details</div>);
        }

        return (
            <div>
                <div>The details for {movie.name} are</div>
                <ul className="movie-details">
                    <li>Director: {movie.Director}</li>
                    <li>Language: {movie.language}</li>
                    <li><p>Description: {movie.description}</p></li>
                </ul>
            </div>
        );
    }
}