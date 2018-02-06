import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import NewComponent from "../components/NewComponent"

// redux actions for getting equipment and chart data from store and sending state changes
import * as Actions from '../redux/actions/Actions';

// connecting redux store returned objects as state for component
const mapStateToProps = state => {
    return {
        data: state.Reducer
    }
}

class NewPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            page: "NewPage"
        }
    }
    
    componentDidMount() {
        this.props.dispatch(Actions.initialData(this.state.page));
    }

    render() {
        return (
            <div>
                <NewComponent pageName={this.props.data.pageName} datata={this.props.data.data.data2}/>
                <Link to="/">Goto Home</Link>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewPage);