import React from "react";
import ChartistGraph from 'react-chartist';
import './../styles/tile.css';

import store from "./../store.js"

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(store.getState().data)
  	var data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }

    return (
    	<div className="tile">
        <div className="title">{this.props.data}</div>
    		<ChartistGraph data={data} type={'Line'} />
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

