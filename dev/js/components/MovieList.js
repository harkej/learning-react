import React from 'react';

import MovieItem from './MovieItem';

export default class MovieList extends React.Component {

    handleClick(movie) {
        this.props.handleClick(movie);
    }

    render () {
        let movieItems = {};
        if(this.props.movieList){
            movieItems = this.props.movieList.map(movie => {
                return(
                    <MovieItem 
                        key={movie.id} 
                        movie={movie} 
                        handleClick={this.handleClick.bind(this)}
                        value={this.props.value}
                    />
                );
            });
        } else {
           
            return (
                <div>
                    No movies found!
                </div>
            );
        }

        return (
            <ul>
                {movieItems}
            </ul>
        );
    }
}