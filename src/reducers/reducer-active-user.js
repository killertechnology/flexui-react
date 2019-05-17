export default function (state={},action) {
	console.log("ACTION ANNOUNCED:" + action.type);
	switch(action.type) {
		case "USER_SELECTED":
			return action.payload;
		break;
	} 

	return state;

}