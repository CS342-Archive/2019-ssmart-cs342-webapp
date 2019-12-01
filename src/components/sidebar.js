import React from "react";
import './../styles/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
    	<div class="sidebar">
		  	<ul>
		  		<li><a href="default.asp">Home</a></li>
		  		<li><a href="default.asp">Patients</a></li>
		  		<li><a href="default.asp">Stats</a></li>
		   	</ul>
	   	</div>
		);
	}
}

export default Sidebar

