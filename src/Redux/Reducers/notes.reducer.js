import { createSlice } from "@reduxjs/toolkit";

export const NoteReducer = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNotes: (state, action) => {
      if (action.payload) {
        // Assuming action.payload is an array of notes
        state.notes.push(...action.payload);
      }
    },
    deleteNote: (state, action) => {
      const deletedNote = state.notes.find((note) => note.id === action.payload);

      if (deletedNote) {
        // Remove the deleted note from the array
        state.notes = state.notes.filter((note) => note.id !== action.payload);

      }
    },
  },
});

// Action creators are generated for each case reducer function 
export const { addNotes, deleteNote } = NoteReducer.actions;
export default NoteReducer.reducer;
