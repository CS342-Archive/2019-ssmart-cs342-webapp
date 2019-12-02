import React from 'react';
import './App.css';

import Firebase from 'firebase'
import config from './config'

import Dashboard from './components/dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);
    this.state = {
      data: []
    }
  }

  getData = () => {
    let ref = Firebase.database().ref('/test');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Dashboard />
    );
  }
}

export default App;
