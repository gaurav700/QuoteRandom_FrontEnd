import { createSlice } from "@reduxjs/toolkit";

const nicheSlice = createSlice({
  name: 'niche',
  initialState: {
    word: "",
  },
  reducers: {
    nicheClick: (state, action) => {
      state.word += String(action.payload);
    },
    afterNiche : (state)=>{
      state.word = "";
    }
  },
});

export const nicheActions = nicheSlice.actions;

export default nicheSlice;
