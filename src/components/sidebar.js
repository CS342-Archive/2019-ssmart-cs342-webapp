import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";

import './../styles/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
    	<div class="sidebar">
		  	<ul>
		  		<li><a href="#"><FontAwesomeIcon icon={faHome} className="mr-3"/>Home</a></li>
		  		<li><a href="#"><FontAwesomeIcon icon={faCog} className="mr-3"/>Patients</a></li>
		  		<li><a href="#"><FontAwesomeIcon icon={faHome} className="mr-3"/>Stats</a></li>
		   	</ul>
	   	</div>
		);
	}
}

export default Sidebar

