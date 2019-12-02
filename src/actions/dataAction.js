import { GET_DATA } from "./../constants/actionTypes";

// action creator
const dataAction = (data) => {
	return {
	  type: GET_DATA,
	  payload: data
	}
}

export default dataAction;