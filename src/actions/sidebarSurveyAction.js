import { ACTIVE_SURVEY } from "./../constants/actionTypes"

const sidebarSurveyAction = (survey) => {
	return {
  		type: ACTIVE_SURVEY,
  		payload: survey
	}
};

export default sidebarSurveyAction;
