import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../api/authApi";

export const userLogin = createAsyncThunk(
  'user/loginUser',
  async (data) => {
    const response = await loginUser(data.username, data.password, data.rememberMe);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to login');
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/logoutUser',
  async () => {
    const response = await logoutUser();
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to logout');
    }
  }
);

const initialState = {
  username: '',
  loginUserRequest: false,
  loginUserError: null,
  isAuthenticated: false,
  isAuthChecked: false,
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loginUserRequest = true;
        state.loginUserError = null;
        state.isLoading = true
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loginUserRequest = false;
        state.loginUserError = null;
        state.data = action.payload;
        state.isAuthChecked = true;
        state.isLoading = false
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loginUserRequest = false;
        state.loginUserError = action.error.message || 'Authorization failed.';
        state.isLoading = false
      });

    builder
      .addCase(userLogout.pending, (state) => {
        state.loginUserRequest = true;
        state.loginUserError = null;
        
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.loginUserRequest = false;
        state.loginUserError = null;
        state.isAuthChecked = true;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loginUserRequest = false;
        state.loginUserError = action.error.message || 'Logout failed.';
      });
  },

});

export const userReducer = userSlice.reducer;