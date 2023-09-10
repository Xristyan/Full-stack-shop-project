import { createSlice } from "@reduxjs/toolkit";
const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortType: "",
  },
  reducers: {
    sortTypeHandler(state, actions) {
      state.sortType = actions.payload;
    },
    reset(state) {
      state.sortType = "";
    },
  },
});
export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
