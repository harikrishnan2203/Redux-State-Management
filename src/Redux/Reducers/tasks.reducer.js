import { createSlice } from "@reduxjs/toolkit";

export const TaskReducer = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTasks: (state, action) => {
      if (action.payload) {
        // Assuming action.payload is an array of tasks
        action.payload.forEach((task) => {
          state.tasks.push(task);
        });
      }
    },
    // deleteTask: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addTasks } = TaskReducer.actions;
export default TaskReducer.reducer;
