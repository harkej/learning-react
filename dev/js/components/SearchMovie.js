import React from 'react';
// import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import MovieList from './MovieList';
import { updateSearchValue, updateSuggestions, updateId, updateMovie } from '../redux/actions/Actions';

const mapStateToProps = (store) => {
    return {
        movieList: store.Reducer.movieList,
        searchValue: store.Reducer.searchValue,
        id: store.Reducer.id,
        suggestions: store.Reducer.suggestions,
        movieSelected: store.Reducer.movieSelected
    }
}

class SearchMovie extends React.Component {

    updateInput(inputValue){
        let movie = this.props.movieList.filter((movie) => movie.name.toLowerCase() === inputValue.toLowerCase());
        if(movie !== undefined) {
            this.props.dispatch(updateMovie(movie[0]))
        }
    };

    handleChange() {
        this.props.dispatch(updateSearchValue(this.refs.movieName.value));
        if (this.refs.movieName.value.length > 0) {
            let filteredMovies = [];
            filteredMovies = this.props.movieList.filter(movie => {
                return movie.name.toLowerCase().indexOf(this.refs.movieName.value.toLowerCase()) != -1
            }
            );
            this.props.dispatch(updateSuggestions(filteredMovies));
        } else {
            this.props.dispatch(updateSuggestions([]));
        }
    }

    handleClick(newValue) {
        let movie = this.props.movieList.filter((movie) => movie.name === newValue.name);
        this.props.dispatch(updateSearchValue(newValue.name));;
        this.props.dispatch(updateSuggestions([]));
        this.props.dispatch(updateId(movie[0].id));
        this.props.dispatch(updateMovie(movie[0]))
    }

    handleBlur() {
        updateSuggestions([]);
    }

    render() {

        const dsConfig = {
            text: 'name',
            value: 'id'
            };

        const style = {
            margin: 12,
            };

        return (
            <div>
                <div className="input-autocomplete">
                        <input
                            onChange={this.handleChange.bind(this)}
                            type="text"
                            placeholder="Enter movie name"
                            ref="movieName" 
                            onBlur={this.handleBlur.bind(this)} 
                            onFocus={this.handleChange.bind(this)} 
                            value={this.props.searchValue}
                        />
                        <MovieList 
                            movieList={this.props.suggestions} 
                            handleClick={this.handleClick.bind(this)}
                            value={this.props.searchValue}
                        />
                        <div className="button">
                            <Link to={"/view-movies/"} > Go to movie </Link>
                        </div>
                        
                </div>
                <br />
                <AutoComplete
                    floatingLabelText="Movie Name"
                    hintText="Start typing!"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.props.movieList}
                    maxSearchResults={5}
                    dataSourceConfig={dsConfig}
                    onUpdateInput={this.updateInput.bind(this)}
                />

                <RaisedButton 
                    label="Search" 
                    primary={true} 
                    style={style}
                    containerElement={<Link to="/view-movies"/>}
                />

                <div>
                    {/* <Filter /> */}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchMovie);