import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";

const App = ({store}) => (
      <Provider store={store}>
          <Router>
              <Route path="/" component={}/>
          </Router>
      </Provider>
  );

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
