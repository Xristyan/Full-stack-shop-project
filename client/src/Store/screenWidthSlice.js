import { createSlice } from "@reduxjs/toolkit";
const screenWidthSlice = createSlice({
  name: "screenWidth",
  initialState: {
    screenWidth: window.innerWidth,
  },
  reducers: {
    screenWidthHandler: (state, actions) => {
      state.screenWidth = actions.payload;
    },
  },
});
export const screenWidthActions = screenWidthSlice.actions;
export default screenWidthSlice.reducer;
