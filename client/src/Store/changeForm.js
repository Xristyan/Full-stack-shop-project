import { createSlice } from "@reduxjs/toolkit";
const changeFormSlice = createSlice({
  name: "ChangeForm",
  initialState: { toggleForm: true },
  reducers: {
    toggleForm(state) {
      state.toggleForm = !state.toggleForm;
    },
  },
});
export const changeFormActions = changeFormSlice.actions;
export default changeFormSlice.reducer;
