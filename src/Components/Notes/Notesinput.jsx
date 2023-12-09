import './notesinput.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../Redux/Reducers/notes.reducer';

export default function Notesinput() {
  const [currentTime, setCurrentTime] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [addNoteContent, setAddNoteContent] = useState('');
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notesReducer)
  useEffect(() => {
    // Set the initial value for currentTime when the component mounts
    updateCurrentTime();

    // Update the time every minute
    const intervalId = setInterval(updateCurrentTime, 30000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const updateCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const timeString = `${hours}:${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })} ${ampm}`;
    setCurrentTime(timeString);
  };

  const handleSubmit = () => {
    const currentDay = new Date();
    const currentTime = currentDay.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const newNote = {
      id : notes.length +1,
      noteTitle,
      addNoteContent,
      currentDay,
      currentTime,
    };

    // Dispatch the action to add a note
    dispatch(addNotes([newNote]));

    // Clear the input fields
    setNoteTitle('');
    setAddNoteContent('');
  };

  return (
    <div className="notes-container">
      <div className="note-input">
        <h1 id="note-head">Add Note</h1>
        <div className="note">
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Title"
          />

          <textarea
            value={addNoteContent}
            onChange={(e) => setAddNoteContent(e.target.value)}
            placeholder="Take a note..."
          ></textarea>

          <div className="date">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p className="current-time">Today, {currentTime}</p>
          </div>
        </div>

        <div className="btn-right">
          <button onClick={handleSubmit} type="button">
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}
