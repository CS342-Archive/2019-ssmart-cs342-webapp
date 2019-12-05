import React from "react";
import ChartistGraph from 'react-chartist';
import './../styles/infoTile.css';

// import store from "./../store.js"

class InfoTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="info-tile">
        <div className="total">{this.props.total}</div>
        <div className="title">{this.props.title}</div>
	   	</div>
		);
	}
}

// const mapStateToProps = state => {
//   console.log('tile state', state)
//   return {
//     graph_data: state.data
//   }
// }
export default InfoTile

