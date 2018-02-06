import React from 'react';

import MovieList from './MovieList';

export default class ShowAll extends React.Component {

    render() {
        return (
            <div id="sidebar">
              <MovieList 
                movieList={this.props.movieList}
                handleClick={(value) => null}
              />
            </div>
        );
    }
}

