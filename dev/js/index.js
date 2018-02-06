// entry point for all container and components.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// injectTapEventPlugin needed for smooth touch input for material UI elements on mobile
import injectTapEventPlugin from 'react-tap-event-plugin';

// redux components needed to bind store to application
import { Provider } from 'react-redux';
import store from './redux/store/store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);
