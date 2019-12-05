import React from "react";
import ChartistGraph from 'react-chartist';
import './../styles/tile.css';

import store from "./../store.js"

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('type', this.props.type, typeof this.props.type)
  	var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
      series: [this.props.data]
    }

    return (
    	<div className="tile">
        <div className="title">{this.props.title}</div>
    		<ChartistGraph data={data} type={this.props.type} />
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
export default Tile

