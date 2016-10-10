const initialState = [
	'foo',
	'bar',
	'baz'
];

export default (state=initialState, {type, payload}) => {
	switch (type) {
		case 'ADD_ITEM':
			return [
				...state,
				payload
			];
		case 'DELETE_ITEM':
			return [
				...state.slice(0, payload),
				...state.slice(payload+1)
			];
		default:
			return state;
	}
}