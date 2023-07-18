import { createSlice } from "@reduxjs/toolkit";
const loginConfigSlice = createSlice({
  name: "loginConfigSlice",
  initialState: { loggedIn: false },
  reducers: {
    login(state, actions) {
      state.loggedIn = actions.payload;
    },
  },
});
export const loginConfigActions = loginConfigSlice.actions;
export default loginConfigSlice.reducer;
