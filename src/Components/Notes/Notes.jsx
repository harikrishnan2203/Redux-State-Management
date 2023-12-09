import React from 'react'
import './notes.css'
import NotesCard from './Notescard';
import { useSelector } from 'react-redux';

export default function Notes() {

  const { notes } = useSelector((state) => state.notesReducer)

  return (
    <div className="card-head">
      <div className="my-notes">
        <i className="fa fa-file-text" aria-hidden="true"></i>
        <h3>My Notes</h3>
      </div>
      <div className="card-container">
        {
          notes.map((data, i) => {
            return <NotesCard key={i} data = { data } />
          })
        }
      </div>
    </div>
  );
}
