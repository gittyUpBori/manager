import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBJ41dkRSZxHgj1z7XHiwZzmI6FMZ3ZePA',
      authDomain: 'manager-bd414.firebaseapp.com',
      databaseURL: 'https://manager-bd414.firebaseio.com',
      storageBucket: 'manager-bd414.appspot.com',
      messagingSenderId: '261488811301'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
