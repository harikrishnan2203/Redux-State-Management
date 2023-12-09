import React, { useEffect, useState } from 'react';
import './notescard.css'
import { deleteNote } from '../../Redux/Reducers/notes.reducer';
import { useDispatch } from 'react-redux';

export default function NotesCard({data}) {

  const [daysAgo, setDaysAgo] = useState('');
  const dispatch = useDispatch()

  const handleDelete = () => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      // Dispatch the action to delete the note
      dispatch(deleteNote(data.id));
    }
  };

  useEffect(() => {
    const timeUpdate = () => {
    if (data && data.currentDay) {
      const currentDate = new Date();
      const creationDate = new Date(data.currentDay);

      const timeDifferenceInSeconds = Math.floor((currentDate - creationDate) / 1000);
  
      if (timeDifferenceInSeconds < 60) {
        setDaysAgo('just now');
      } else if (timeDifferenceInSeconds < 3600) {
        const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
        console.log(minutesAgo)
        setDaysAgo(`${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`);
      } else if (timeDifferenceInSeconds < 86400) {
        const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
        setDaysAgo(`${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`);
      } else {
        const daysAgo = Math.floor(timeDifferenceInSeconds / 86400);
        setDaysAgo(`${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`);
      }
    } else {
      setDaysAgo('Creation date unavailable');
    }
  };

  timeUpdate();

  const intervalId = setInterval(timeUpdate, 3000);

  return () => clearInterval(intervalId)

  }, [data]);
  
  return (
    <div className="cards" key={data.id} >
      <div className="card">
        <div className="card-body">
          <div className="title">
            <h5 className="card-title">{data.noteTitle} </h5>
            <div className="btns">
              <button className="bt">
              <i className="fa fa-eye" aria-hidden="true"></i>
              </button>
              <button className="bt">
                <i className="fa fa-trash-o" onClick={handleDelete}></i>
              </button>
            </div>
          </div>
          <p className="card-text"> {data.addNoteContent} </p>
          <p className="time">{ daysAgo }</p>
        </div>
      </div>
    </div>
  );
}
