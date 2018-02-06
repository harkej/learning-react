// Redux ActionTypes for informing reducer which switchcase to perform
import * as Types from '../actions/actionTypes';

// Initial state object which remains immutable.
import * as Init from '../store/initialState';

// Reducers are pure functions which return versioned objects of the store state based on the Action call
export default function reducer(
    state = Init.initialState,
    action) {
    switch (action.type) {
        // Reducer to load data for the containers
        case Types.UPDATE_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload.searchValue
            }
            break;
        }
        case Types.UPDATE_MOVIE: {
            return {
                ...state,
                movieSelected: action.payload.movieSelected
            }
            break;
        }
        case Types.UPDATE_SUGGESTIONS: {
            return {
                ...state,
                suggestions: action.payload.suggestions
            }
            break;
        }
        case Types.UPDATE_ID: {
            return {
                ...state,
                id: action.payload.id
            }
            break;
        }
        default: return state;
    }
}