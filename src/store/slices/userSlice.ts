import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDoctor, IPatient, Role, User } from "../../models/user";
import { RootState } from "../store";

interface UserState {
  role?: Role;
  user?: User | IPatient | IDoctor;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User | IPatient | IDoctor>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
    },
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    },
  },
});

export const { login, logout, setRole } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getUserProfile = (state: RootState) => state.user.user;
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getRole = (state: RootState) => state.user.role;

export default userSlice.reducer;
