import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import PropTypes from 'prop-types';

import GamePage from "./components/pages/GamePage/GamePage";
import GameSettingsPage from "./components/pages/GameSettings/GameSettings";

const App = ({store}) => (
      <Provider store={store}>
          <Router>
              <Route path="/" component={GamePage}/>
              <Route path="/game-settings" component={GameSettingsPage}/>
              {/*<Route path="/winners" component={}/>*/}
          </Router>
      </Provider>
  );

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
