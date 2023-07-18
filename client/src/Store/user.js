import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userSlice",
  initialState: { user: {} },
  reducers: {
    setUser(state, account) {
      state.user = account.payload;
    },
    clearUser(state) {
      state.user = {};
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
