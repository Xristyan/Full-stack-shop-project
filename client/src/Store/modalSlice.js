import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modal",
  initialState: { showForm: false, showFilter: false },
  reducers: {
    showForm(state) {
      state.showForm = true;
    },
    hideForm(state) {
      state.showForm = false;
    },
    toggleFilterModal: (state, actions) => {
      state.showFilter = actions.payload;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
