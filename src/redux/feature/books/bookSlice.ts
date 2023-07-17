import { IBook } from './../../../types/globalTypes';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBooks {
  genre: string;
  publicationYear: string;
  searchTerm: string;
  searchData: IBook[];
}

const initialState: IBooks = {
  genre: "",
  publicationYear: "",
  searchTerm: "",
  searchData:[]
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
    setsearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setsearchData: (state, action: PayloadAction<IBook[]>) => {
      state.searchData = action.payload;
    },
  },
});

export const { setGenre, setpublicationYear, setsearchTerm, setsearchData } =
  bookSlice.actions;

export default bookSlice.reducer;
