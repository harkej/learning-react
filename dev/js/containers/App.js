// entry point for app containers and components for different views
import React, { Component } from 'react';
import { connect } from 'react-redux';

// navigation elements for react router
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom'

// Material UI components to set theme for application 
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Main View containers 
import Home from '../components/Home'
import Search from '../components/Search'
import ViewMovies from '../components/ViewMovies'

import Header from '../components/Header';

import '../../scss/App.scss';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <HashRouter>
          <div>
            <header className="header">
              Insta-Flix
            </header>
            <div className="navbar">
                <Header />
              </div>
            <div className="container">
              <div>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/search' component={Search} />
                  <Route path='/view-movies' component={ViewMovies} />
                  <Route render={() => <h3>Page not found</h3>} />
                </Switch>
              </div>
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}