import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import { updateMovie } from '../redux/actions/Actions';

const mapStateToProps = (store) => {
    return {
        movieList: store.Reducer.movieList,
        id: store.Reducer.id,
        movieSelected: store.Reducer.movieSelected
    }
}

class ViewMovies extends React.Component {

    handleClick(movie) {
        this.props.dispatch(updateMovie(movie));
    }

    render () {
        return (
          <div>
            {/* <Switch>
                <Route exact path="/view-movies" component={ShowAll} />
                <Route path="/view-movies/:id" component={MovieDetails} />
            </Switch> */}
            <div id="sidebar">
              <MovieList 
                movieList={this.props.movieList}
                handleClick={this.handleClick.bind(this)}
              />
            </div>
            <div id="main">
                <MovieDetails 
                    movieList={this.props.movieList} 
                    id={this.props.id} 
                    movie={this.props.movieSelected} 
                />
            </div>
          </div>
        );
    }
}

export default connect (mapStateToProps)(ViewMovies);
