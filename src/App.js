import React from 'react';
import './App.css';

import firebase from 'firebase'
import config from './config'

import { connect } from "react-redux";
import dataAction from "./actions/dataAction";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";

import Dashboard from './components/dashboard'

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class App extends React.Component {
  constructor(props) {
    super(props);
    // firebase.initializeApp(config);
    // this.db = firebase.firestore();
    this.state = {
      data: []
    }
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
        // add data to redux store
        // console.log(this.props)
        // this.props.dataAction(cities)
      });
  }


  componentDidMount() {
     // const { firestore } = this.context.store
    // this.getData();
  }

  render() {
    return (
      <Dashboard />
    );
  }
}

// connexts redux state -> react props
const mapStateToProps = state => {
  console.log('wtf', state);

  return {
    projects: state.firestore.ordered.projects
  }
}

// connexts redux actions -> react props
const mapDispatchToProps = dispatch => ({
  dataAction: (data) => dispatch(dataAction(data))
})


export default compose(
 firestoreConnect([{ collection: 'test' }]), 
 connect(mapStateToProps)
)(App)
// export default connect(mapStateToProps, mapDispatchToProps)(App);
