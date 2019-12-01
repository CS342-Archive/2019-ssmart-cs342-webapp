import React from "react";
import Sidebar from './sidebar'
import Tile from './tile'
import './../styles/dashboard.css';


class Dashboard extends React.Component {
	render() {
		return (
			<div class="dashboard">
				<Sidebar />
				<div class="content">
					<Tile />
				</div>
			</div>
		);
	}
}

export default Dashboard