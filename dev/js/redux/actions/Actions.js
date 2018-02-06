// Redux Action for updating state with latest chart data
import axios from 'axios';

// Redux ActionTypes for informing reducer which switchcase to perform
import * as Types from './actionTypes';

// local data for dev environment
import { movieList } from '../store/devData';

// Redux Action to change the timeWindow of charts being displayed in trendchart
export function updateSearchValue(searchValue) {   
    return function(dispatch) {
            dispatch({
                type: Types.UPDATE_SEARCH_VALUE,
                payload: {searchValue: searchValue}
        }
    )}
}

export function updateMovie(movie) {   
    return function(dispatch) {
            dispatch({
                type: Types.UPDATE_MOVIE,
                payload: {movieSelected: movie}
        }
    )}
}

export function updateSuggestions(suggestions) {   
    return function(dispatch) {
            dispatch({
                type: Types.UPDATE_SUGGESTIONS,
                payload: {suggestions: suggestions}
        }
    )}
}

export function updateId(id) {   
    return function(dispatch) {
            dispatch({
                type: Types.UPDATE_ID,
                payload: {id: id}
        }
    )}
}