import './savetasks.css'
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';



export default function SaveTasks() {

  const { tasks } = useSelector((state) => state.tasksReducer)
  return (

      <div className="task">
        <div className="my-tasks">
          <div className="task-head">
            <i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i>
            <h5>My Tasks</h5>
          </div>
        </div>

        <div className="tasks">
            {
              tasks.map((data, i) => {
                return <TaskCard key={i} data={data} />
              })
            }
        </div>

      </div>
  );
}
