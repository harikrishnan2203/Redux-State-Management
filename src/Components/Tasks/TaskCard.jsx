import React, { useEffect, useState } from 'react';
import './taskcard.css'


export default function TaskCard({data}) {
  console.log(data)

  const [markChecked, setMarkChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);


  const markToggleCheck = () => {
    setMarkChecked(!markChecked);
  };
  const favoriteToggleCheck = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    // Calculate the difference between the current date and the task end date
    const currentDate = new Date();
    const taskEndDate = new Date(data.taskDate); // taskEndDate from context

    const timeDifference = taskEndDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setDaysLeft(daysDifference);
  }, [data.taskDate]);


  return (

      <div className="card" >
        <div className="card-body">
          <div className="cards">
          <div className="icon" onClick={markToggleCheck}>
            {markChecked ? (
              <i className="fa fa-check-circle-o icon" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-circle-o icon" aria-hidden="true"></i>
            )}
          </div>
            <div className="title">
              <h5>{data.taskTitle}</h5>
              <p>{ daysLeft } days left</p>
            </div>
          </div>
          <div className="favorite" onClick={favoriteToggleCheck}>
            {
              isChecked ? (<i className="fa fa-star" aria-hidden="true"></i>
              ) :(<i className="fa fa-star-o" aria-hidden="true"></i>)
            }
          </div>
        </div>
      </div>

  );
}
