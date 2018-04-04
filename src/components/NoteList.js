import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

const NoteList = ({ notes, toggleEditNote, deleteNote }) => (
	<div>
		{notes.map(n => 
			<Note 
				key={n.id}
				id = {n.id}
				{...n}
				editOnClick={()=>toggleEditNote(n.id)}
				deleteOnClick={()=>deleteNote(n.id)}
			/>
		)}
	</div>
)



NoteList.propTypes = {
	  notes: PropTypes.arrayOf(
		      PropTypes.shape({
				        id: PropTypes.string.isRequired,
				        title: PropTypes.string.isRequired,
				        text: PropTypes.string.isRequired,
				      }).isRequired
		    ).isRequired,
	toggleEditNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired
}
 
export default NoteList;
