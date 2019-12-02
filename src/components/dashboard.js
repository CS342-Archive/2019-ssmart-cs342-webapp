import React from "react";
import Sidebar from './sidebar'
import Tile from './tile'
import './../styles/dashboard.css';


class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard">
				<Sidebar />
				<div className="content">
					<Tile />
				</div>
			</div>
		);
	}
}

export default Dashboard