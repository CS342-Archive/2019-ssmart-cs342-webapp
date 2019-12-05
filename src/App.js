import React from 'react';
import './App.css';

import Dashboard from './components/dashboard'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // gets data from firestore
  getData = () => {
    this.db.collection("test")
      .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
          cities.push(doc.data().val);
        });
        console.log("Current cities in CA: ", cities);
      });
  }


  componentDidMount() {
    // const { firestore } = this.context.store
    // this.getData();
  }

  render() {
    return (
      <Dashboard active_survey={"ActiveSurveyTask"}/>
    );
  }
}

export default App;
