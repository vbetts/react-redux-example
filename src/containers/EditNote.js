import React from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions'

let EditNote = ({ dispatch, props }) => {
	let titleInput
	let textInput
	return (	
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!titleInput.value.trim() && !textInput.value.trim()){
						return
					}
					titleInput.value = titleInput.value === undefined ? props.title : titleInput.value
					textInput.value = textInput.value === undefined ? props.text : textInput.value
					dispatch(editNote(props.id, titleInput.value, textInput.value))
				}}
			>
				<input
					ref={node => {
						titleInput = node
					}}
					defaultValue={props.title} 
				/>
				<input 
					ref={node => {
						textInput = node
					}}
					defaultValue={props.text} 
				/>
				<button type="submit">
					Submit
				</button>
			</form>	
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		props : ownProps
	}
}
EditNote = connect(mapStateToProps)(EditNote)
export default EditNote
