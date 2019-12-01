import React from "react";
import Nav from 'react-bootstrap/Nav';
import Sidebar from './sidebar'
import './../styles/dashboard.css';


class Dashboard extends React.Component {
	render() {
		return (
			<div className="row dashboard">
				
				<Sidebar />
				
				<div className="col-10 content">
					hihihihihhihisdfsdfsdfsdf
					
				</div>
			</div>
		);
	}
}

export default Dashboard