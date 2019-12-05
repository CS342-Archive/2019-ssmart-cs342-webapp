import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNotesMedical } from "@fortawesome/free-solid-svg-icons";

import store from "./../store.js"
import sidebarSurveyAction from './../actions/sidebarSurveyAction.js'

import './../styles/sidebar.css';

class Sidebar extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.toggleActive = this.toggleActive.bind(this);
 //    this.state = {
 //        active: "Home"
 //    };
	// }

	// toggleActive() {
 //    const currentState = this.state.active;
 //    this.setState({ active:  });
 //  };
	// handleClick = (e) => {
	// 	let button_id = e.target.id;
	// 	store.dispatch(sidebarSurveyAction(button_id));
	//   // this.setState({ clickedSubmit: e.target.id },() => {
	//   	console.log(button_id);
	//   });
	// }

	handleClick = (e) => {
		let button_id = e.target.id;
		store.dispatch(sidebarSurveyAction(button_id));
		console.log(button_id)
  // this.setState({ clickedSubmit: e.target.id },() => {
  //   console.log(this.state.clickedSubmit)
  // });
}


  render() {
    return (
    	<div className="sidebar">
		  	<ul>
		  		<li><button onClick={this.handleClick} id="Home"><FontAwesomeIcon icon={faHome} className="mr"/>Home</button></li>
		  		<li><button onClick={this.handleClick} id="ActiveSurveyTask"><FontAwesomeIcon icon={faNotesMedical} className="mr"/>Active Survey</button></li>
		  		<li><button onClick={this.handleClick} id="MedicationSurveyTask"><FontAwesomeIcon icon={faNotesMedical} className="mr"/>Medication Survey</button></li>
		  		<li><button onClick={this.handleClick} id="SF12Survey"><FontAwesomeIcon icon={faNotesMedical} className="mr"/>SF12 Survey</button></li>
		  		<li><button onClick={this.handleClick} id="SOWSSurveyTask"><FontAwesomeIcon icon={faNotesMedical} className="mr"/>SOWS Survey</button></li>
		   	</ul>
	   	</div>
		);
	}
}

export default Sidebar

