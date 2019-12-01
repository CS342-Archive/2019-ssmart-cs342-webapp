import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";

import './../styles/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
    	<div class="sidebar">
		  	<ul>
		  		<li><a href="#"><FontAwesomeIcon icon={faHome} className="mr"/>Home</a></li>
		  		<li><a href="#"><FontAwesomeIcon icon={faCog} className="mr"/>Patients</a></li>
		  		<li><a href="#"><FontAwesomeIcon icon={faHome} className="mr"/>Stats</a></li>
		   	</ul>
	   	</div>
		);
	}
}

export default Sidebar

