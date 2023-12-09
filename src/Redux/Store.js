import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./Reducers/notes.reducer";
import TaskReducer from "./Reducers/tasks.reducer";
import trashReducer from "./Reducers/trash.reducer";

const store = configureStore({
    reducer: {
        notesReducer: NoteReducer,
        tasksReducer: TaskReducer,
        trashReducer: trashReducer,
    }
})
export default store;
  