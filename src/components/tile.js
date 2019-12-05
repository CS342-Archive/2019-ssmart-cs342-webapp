import React from "react";
import ChartistGraph from 'react-chartist';
import './../styles/tile.css';

import store from "./../store.js"

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data)
  	var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [this.props.data]
    }

    return (
    	<div className="tile">
        <div className="title">{this.props.title}</div>
    		<ChartistGraph data={data} type='Line' />
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

