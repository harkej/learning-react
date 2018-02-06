import React from 'react';
import { Link } from 'react-router-dom';

export default class MovieItem extends React.Component {

    handleClick(e) {
        // console.log(this.props.movie.id);
        this.props.handleClick(this.props.movie);
        e.preventDefault();
    }

    render () {
        return (
            <li onClick={this.handleClick.bind(this)} className="active" >
                {this.props.movie.name}
                {/* <Link to={"/view-movies/"+this.props.movie.id} > {this.props.movie.name} </Link> */}
            </li>
        );
    }
}
