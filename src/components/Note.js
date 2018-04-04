import React from 'react'
import PropTypes from 'prop-types'
import EditNote from '../containers/EditNote'

const Note = ({ id, title, text, editing, deleteOnClick, editOnClick }) => (
	editing ? 
	<EditNote id={id} title={title} text={text} />: 
	<div>
		<strong>{title}</strong>
		<p>{text}</p>
		<button onClick={deleteOnClick}>Delete</button>
		<button onClick={editOnClick}>Edit</button>
	</div>

)
 
Note.propTypes = {
	id : PropTypes.string.isRequired,
	title : PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	editing: PropTypes.bool.isRequired,
	deleteOnClick : PropTypes.func.isRequired,
	editOnClick : PropTypes.func.isRequired
}
 
export default Note
