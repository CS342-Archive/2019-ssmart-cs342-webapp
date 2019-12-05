import React from "react";
import Tile from './tile'

import './../styles/content.css';

import store from "./../store.js"

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(store.getState().data)
  	// var data = {
   //    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   //    series: [
   //      [12, 9, 7, 8, 5],
   //      [2, 1, 3.5, 7, 3],
   //      [1, 3, 4, 5, 6]
   //    ]
   //  }
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']
    const tiles = questions.map((q, index) => <Tile data={q} key={index}/>)
    return (
     
    	<div className="content">
        {tiles}
      </div>
		);
	}
}

// const mapStateToProps = state => {
//   console.log('tile state', state)
//   return {
//     graph_data: state.data
//   }
// }
export default Content

