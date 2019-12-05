import React from "react";
import Tile from './tile'
import InfoTile from './infoTile'

import './../styles/content.css';

import store from "./../store.js"

import addSpace from "./../util/addSpace"

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   var surveys = store.getState().data
  //   console.log(surveys)
  // }

  render() {

    // var graph_data = store.getState().data
    // console.log(graph_data[this.props.])
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
      questions.push([q, this.props.survey_questions[q]])
    }
    const survey_graph_type = {
      "ActiveSurveyTask": 'Line',
      "MedicationSurveyTask": 'Pie',
      "SF12Survey": 'Bar',
      "SOWSSurveyTask": 'Line',
    }
    const survey_total = {
      "ActiveSurveyTask": 8,
      "MedicationSurveyTask": 2,
      "SF12Survey": 6,
      "SOWSSurveyTask": 4,
    }
    const surveys = ["ActiveSurveyTask", "MedicationSurveyTask", "SF12Survey", "SOWSSurveyTask"]
    var tiles = questions.map((q, index) => <Tile title={addSpace(q[0])} data={q[1]} type={survey_graph_type[this.props.survey]} key={index} />)
    if (this.props.survey === 'Home') {
      tiles = surveys.map((survey, index) => <InfoTile title={survey} total={survey_total[survey]} key={index} />)
    }
    return (
    	<div className="content">
        <div className="heading">{addSpace(this.props.survey)}</div>
        <div className="graphs">
          {tiles}
        </div>
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

