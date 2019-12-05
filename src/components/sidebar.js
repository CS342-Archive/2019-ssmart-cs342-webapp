import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";

import './../styles/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
    	<div className="sidebar">
		  	<ul>
		  		<li><button><FontAwesomeIcon icon={faHome} className="mr"/>Home</button></li>
		  		<li><button><FontAwesomeIcon icon={faCog} className="mr"/>Studies</button></li>
		  		<li><button><FontAwesomeIcon icon={faCog} className="mr"/>Healthkit</button></li>
		   	</ul>
	   	</div>
		);
	}
}

export default Sidebar

