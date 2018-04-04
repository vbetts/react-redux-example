import { ADD_NOTE, DELETE_NOTE, TOGGLE_EDIT_NOTE, EDIT_NOTE } from "./constants"


function createId(){
	    const abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
	    var token=""; 
	    for(var i=0;i<32;i++){
			         token += abc[Math.floor(Math.random()*abc.length)];
			    }
	    return token; //Will return a 32 bit "hash"
}

// Action creators
export function addNote(title, text){
	const id = createId();
	return { type : ADD_NOTE, id : id, title, text }
}
export function toggleEditNote(id){
	return { type : TOGGLE_EDIT_NOTE, id }
}
export function editNote(id, title, text){
	return { type : EDIT_NOTE, id, title, text }
}
export function deleteNote(id){
	return { type : DELETE_NOTE, id }
}

