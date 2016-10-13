const initialState = {}

export default (state=initialState, {type, payload}) => {
	switch (type) {
		case 'TRENDING_GIF_FETCHED':
		case 'RANDOM_GIF_FETCHED':
			return {
				...state,
				url: payload
			};
		default:
			return state;
	}
}