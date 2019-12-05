import { GET_DATA, SET_LOCAL_DATA } from "./../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_LOCAL_DATA:
      return {
        ...state,
        data: action.payload
      }
    case GET_DATA:
    	return {
    		...state,
    		data: action.payload
    	}
    default:
      return state;
  }
};