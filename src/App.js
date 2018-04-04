import React, { Component } from 'react';
import './App.css';
import ListNotes from './containers/NotesContainer'
import AddNote from './containers/AddNote'

class App extends Component {
  render() {
    return (
      <div className="App">
			<AddNote />
			<ListNotes />
      </div>
    );
  }
}

export default App;
