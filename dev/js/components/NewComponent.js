// Component in latest info view for latest values of 4 charts
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

// redux actions for getting equipment and chart data from store and sending state changes
import * as Actions from '../redux/actions/Actions';

// connecting redux store returned objects as state for component
const mapStateToProps = state => {
    return {
        data: state.Reducer
    }
}
class NewComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>{this.props.pageName}</h1>
                <div>
                    {this.props.datata}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NewComponent)