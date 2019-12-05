import { GET_DATA, SET_LOCAL_DATA, ACTIVE_SURVEY } from "./../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_LOCAL_DATA:
      return {
        ...state, 
        data: action.payload,
      }
    case GET_DATA:
    	return {
        ...state, 
    		data: action.payload,
    	}
    case ACTIVE_SURVEY:
      return {
        ...state, 
        active_survey: action.payload
      }
    default:
      return state;
  }
};