import { combineReducers } from 'redux'
import { ADD_NOTE, DELETE_NOTE, TOGGLE_EDIT_NOTE, EDIT_NOTE } from "./constants"


function notes(state = [], action){
	switch (action.type){
		case ADD_NOTE:
			return [
				...state,
				{
					id : action.id,
					title : action.title,
					text : action.text,
					editing : false
				}
			]
		case TOGGLE_EDIT_NOTE:
			return state.map((note, index) => {
				if (note.id === action.id){
					return Object.assign({}, note, {
						editing : true
					})
				}
				return note
			})
		case EDIT_NOTE:
			return state.map((note, index) => {
				if (note.id === action.id){
					return Object.assign({}, note, {
						text : action.text,
						title : action.title,
						editing : false
					})
				}
				return note
			})
		case DELETE_NOTE:
			return state.filter((note, index) => {
				return note.id !== action.id
			})
		default:
			return state
	}
}

const noteApp = combineReducers({
	  notes
})
 
export default noteApp


