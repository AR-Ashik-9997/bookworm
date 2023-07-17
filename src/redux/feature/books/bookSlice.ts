import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBook {
  genre: string;
  publicationYear: string;
}

const initialState: IBook = {
  genre: "",
  publicationYear: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setpublicationYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setGenre, setpublicationYear } = bookSlice.actions;

export default bookSlice.reducer;
