import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
 
let AddNote = ({ dispatch }) => {
	let text
	let title
	 
	return (
		<div>
		<form
		onSubmit={e => {
			e.preventDefault()
			if (!title.value.trim() && !text.value.trim()) {
				return
			}
			dispatch(addNote(title.value, text.value))
			title.value = ''
			text.value = ''
		}}
		>
		<input
		ref={node => {
			title = node
		}}
		/>
		<input
		ref={node => {
			text = node
		}}
		/>
		<button type="submit">
		Add Note
		</button>
		</form>
		</div>
	)
}
AddNote = connect()(AddNote)
 
export default AddNote
