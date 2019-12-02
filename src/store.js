import { createStore, combineReducers, compose } from 'redux'
import rotateReducer from "./reducers/rotateReducer";

import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

import firebase from 'firebase'
import config from './config'

const rfConfig = {} // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
firebase.firestore();

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
)(createStore)

// Add Firebase to reducers
const rootReducer = combineReducers({
  firestore: firestoreReducer
})

// Create store with reducers and initial state
// const initialState = { rotating: true, data: [] }
const store = createStoreWithFirebase(rootReducer)

export default store;

// function configureStore(initialState) {
//   return createStore(rotateReducer, initialState);
// }

// export default configureStore;