import { createAction } from 'redux-actions';

export const addItem = createAction('ADD_ITEM');
export const deleteItem = createAction('DELETE_ITEM');
export const toggleEditMode = createAction('TOGGLE_EDITMODE');
export const fetchCat = createAction('FETCH_CAT');