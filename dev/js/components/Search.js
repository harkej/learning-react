import React from 'react';
// import { connect } from 'react-redux';

import SearchMovie from './SearchMovie';
// import Dev from '../Data/Dev';

// @connect((store) => {
//     return {
//         movieList: store.movieList,
//         searchValue: '',
//         id: 0
//     };
// })

export default class Search extends React.Component {
    
    render () {
        return (
            <div>
                <h3>Enter a movie below to check if it is playing in theatres near you!</h3>
                <br />
                <SearchMovie movies={this.props.movieList} input={this.props.searchValue} id={this.props.id} />
            </div>
        );
    }
}