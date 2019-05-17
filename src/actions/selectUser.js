/*
 src/actions/simpleAction.js
*/
export const selectUser = (user) => {
	console.log("user clicked: " + user.first);
	return {
		type: "USER_SELECTED",
		payload: user
	}

 /*
dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
 */

};