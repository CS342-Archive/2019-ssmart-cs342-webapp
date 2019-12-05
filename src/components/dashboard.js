import React from "react";
import Sidebar from './sidebar'
import Tile from './tile'
import './../styles/dashboard.css';

import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


class Dashboard extends React.Component {
	constructor(props) {
    super(props);
  }

  
// <Tile data={this.props.data}/>
	render() {
		const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']
  	const tiles = questions.map((q, index) => <Tile data={q} key={index}/>)
		return (
			<div className="dashboard">
				<Sidebar />
				<div className="content">
					{tiles}
				</div>
			</div>
		);
	}
}

// gets survey data
// connexts redux state -> react props
const mapStateToProps = state => {
	console.log('wtf dashboard', state);

	var survey_dict = {}
	var surveys = state.firestore.data.surveys
	for (var survey_id in surveys) {
	  	let survey = surveys[survey_id]

	  	// survey name
	  	var survey_name = survey['identifier']
	  	// date survey was started
	  	var survey_start = survey['startDate']
	  	// survey questions
	  	var survey_questions = survey['results']
	  	for (var index in survey_questions) {
	  		var q = survey_questions[index]
	  		var question_name = q['identifier']
	  		// dont collect data if it's an instruction step
	  		if (!question_name.includes('Instruction')) {
	  			// console.log(q['identifier'])
	  			var results = q['results'][0]
	  			if (typeof results !== 'undefined') {
	  			
		  			// console.log('question results', results)
		  		
		  			// active survey question types
		  			var data = ""
		  			switch (results['questionType']) {
		  				case 1:
		  					data = results['scaleAnswer']
		  					break
		  				case 2:
		  					if (typeof results['choiceAnswers'] !== 'undefined') {
		  						data = results['choiceAnswers']
		  					}
		  					break
		  				case 7:
		  					data = results['booleanAnswer']
		  					break
		  				case 8:
		  					data = results['textAnswer']
		  					break
		  			}
		  			if (data !== "" && typeof data !== "undefined") {
		  				// create dict for survey and array for question answers if not already exist
		  				if (typeof survey_dict[survey_name] === 'undefined') {
		  					survey_dict[survey_name] = {}
		  				}
		  				if (typeof survey_dict[survey_name][question_name] === 'undefined') {
		  					survey_dict[survey_name][question_name] = []
		  				}
		  				survey_dict[survey_name][question_name].push(data)
		  			} 
		  		}
	  		}
	  	}
	}

	console.log(survey_dict)
  	return {
    	data: surveys
  	}
}


// export default Dashboard
export default compose(
 	firestoreConnect([{ collection: 'surveys' }]), 
 	connect(mapStateToProps)
)(Dashboard)