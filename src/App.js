import React from 'react';
import './App.css';

import firebase from 'firebase'
import config from './config'

import Dashboard from './components/dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.db = firebase.firestore();


//     var citiesRef = db.collection("cities");

// citiesRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// citiesRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// citiesRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// citiesRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });



    this.state = {
      data: []
    }
  }


// db.collection("cities").where("state", "==", "CA")
//     .onSnapshot(function(querySnapshot) {
//         var cities = [];
//         querySnapshot.forEach(function(doc) {
//             cities.push(doc.data().name);
//         });
//         console.log("Current cities in CA: ", cities.join(", "));
//     });

    
  getUpdate = () => {
    this.db.collection("test").doc("data")
      .onSnapshot(function(doc) {
          var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.log(source, " data: ", doc.data());
      });
  }


  getData = () => {
    let ref = firebase.database().ref('/test');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      console.log(state)
      this.setState(state);
    });
    console.log('DATA RETRIEVED');

  }

  componentDidMount() {
    // this.getData();
    this.getUpdate();
  }

  render() {
    return (
      <Dashboard />
    );
  }
}

export default App;
