import React from 'react';
import Main from './Components/Main/Main'
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

const store = ConfigureStore();

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