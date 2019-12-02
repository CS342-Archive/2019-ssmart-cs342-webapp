import { GET_DATA } from "./../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case "rotate":
      return {
        rotating: action.payload
      };
    case GET_DATA:
    	return {
    		...state,
    		data: action.payload
    	}
    default:
      return state;
  }
};