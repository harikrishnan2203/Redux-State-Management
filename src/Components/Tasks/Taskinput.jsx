import React, { useState } from 'react'
import './taskinput.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTasks } from '../../Redux/Reducers/tasks.reducer';

export default function Taskinput() {
    const [taskTitle, setTaskTitle] = useState('');
    const [addTaskContent, setAddTaskContent] = useState('')
    const [taskDate, setTaskDate] = useState('');

    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasksReducer);


    const handleSubmit = (e) => {

        const newTask = {
            id: tasks.length + 1,
            taskTitle,
            addTaskContent,
            taskDate
        }

        dispatch(addTasks([newTask]))

        // setTask((prevTasks) => [...prevTasks, newTask]);
        setTaskTitle('');
        setAddTaskContent('');
        setTaskDate('');
    }



  return (
    <div className="task-container">
      <div className="task-input">
        <h1 id="task-head">Add a Task</h1>
        <div className="task-in">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Title"
          />

          <textarea
            value={addTaskContent}
            onChange={(e) => setAddTaskContent(e.target.value)}
            placeholder="Add a task..."
          ></textarea>
          <div className="date">
          <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <p className="current-time">Date/Time</p>
          </div>
        </div>
        <div className="btn-right">
          <button onClick={handleSubmit} type="button">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
