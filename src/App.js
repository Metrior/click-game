import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import PropTypes from 'prop-types';

import GamePage from "./components/pages/GamePage/GamePage";

const App = ({store}) => (
      <Provider store={store}>
          <Router>
              <Route path="/" component={GamePage}/>
          </Router>
      </Provider>
  );

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
