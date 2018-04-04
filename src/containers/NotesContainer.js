import { connect } from 'react-redux'
import  NoteList from '../components/NoteList'
import { toggleEditNote, deleteNote }  from '../actions'

const mapStateToProps = state => {
	return {
		notes : state.notes
	}
}

const mapDispatchToProps = dispatch => ({
	  toggleEditNote: id => dispatch(toggleEditNote(id)),
	  deleteNote: id => dispatch(deleteNote(id))
})

const ListNotes = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteList)
 
export default ListNotes
