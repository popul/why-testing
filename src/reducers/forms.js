const initialState = {
	editMode: false
};

export default (state=initialState, {type, payload}) => {
	switch(type) {
		case 'TOGGLE_EDITMODE':
			return {
				...state,
				editMode: !state.editMode
			};
		case 'ADD_ITEM':
		case 'DELETE_ITEM':
			return {
				...state,
				editMode: false
			};
		default:
			return state;		
	}
};