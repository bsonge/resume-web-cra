import React from 'react';
import Main from './Components/Main/Main'
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends React.Component {
  
    render() {
      return (
        <Provider store={store}>
          <div className="App">
            <Main />
          </div>
        </Provider>
      );
    }
}

export default App;
