import React from 'react';
import Main from './Components/Main/Main'
import './App.scss';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  
    render() {
      return (
        <Provider store={store}>
          <Router>
            <div className="App">
              <Main />
            </div>
          </Router>
        </Provider>
      );
    }
}

export default App;