import React from "react";
import Tile from './tile'

import './../styles/content.css';

import store from "./../store.js"

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var graph_data = store.getState().data
    console.log(this.props.survey_questions)
    // if (typeof graph_data !== "undefined") {
    //   if (typeof graph_data[this.props.survey] !== "undefined") {
    //     console.log(graph_data[this.props.survey])
    //   }
    // }

   
  	// var data = {
   //    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   //    series: [
   //      [12, 9, 7, 8, 5],
   //      [2, 1, 3.5, 7, 3],
   //      [1, 3, 4, 5, 6]
   //    ]
   //  }
    const questions = []
    for (var q in this.props.survey_questions) {
      questions.push(q)
    }
    const tiles = questions.map((q, index) => <Tile data={q} key={index}/>)
    return (
     
    	<div className="content">
        <div className="title">{this.props.survey}</div>
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

