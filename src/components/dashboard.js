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

// connexts redux state -> react props
const mapStateToProps = state => {
  console.log('wtf dashboard', state);

  return {
    data: state.firestore.data.test
  }
}


// export default Dashboard
export default compose(
 firestoreConnect([{ collection: 'test' }]), 
 connect(mapStateToProps)
)(Dashboard)