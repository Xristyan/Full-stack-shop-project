import { createSlice } from "@reduxjs/toolkit";
const showLoginFormSlice = createSlice({
  name: "showLoginForm",
  initialState: { showForm: false },
  reducers: {
    showForm(state) {
      state.showForm = true;
    },
    hideForm(state) {
      state.showForm = false;
    },
  },
});
export const showFormActions = showLoginFormSlice.actions;
export default showLoginFormSlice.reducer;
