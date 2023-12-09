import { createSlice } from "@reduxjs/toolkit";

export const TrashReducer = createSlice({
  name: "trash",
  initialState: {
    trash: [],
  },
  reducers: {
    addTrash: (state, action) => {
      console.log(action)
      if (action.payload) {
        // Assuming action.payload is an array of tasks
        action.payload.forEach((trash) => {
          state.trash.push(trash);
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTrash } = TrashReducer.actions;
export default TrashReducer.reducer;
