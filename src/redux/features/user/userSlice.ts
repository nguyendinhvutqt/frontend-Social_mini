// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  birthDay: Date | undefined;
  gender: string;
  role: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  userId: "",
  displayName: "",
  email: "",
  avatarUrl: "",
  birthDay: undefined,
  gender: "",
  role: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.avatarUrl = action.payload.avatarUrl;
      state.birthDay = action.payload.birthDay;
      state.gender = action.payload.gender;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.userId = "";
      state.email = "";
      state.displayName = "";
      state.avatarUrl = "";
      state.birthDay = undefined;
      state.gender = "";
      state.role = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
