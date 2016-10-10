const initialState = {}

export default (state=initialState, {type, payload}) => {
	switch (type) {
		case 'CAT_FETCHED':
			return {
				...state,
				url: payload
			};
		default:
			return state;
	}
}