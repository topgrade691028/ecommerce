import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { UserProps } from '../login';

// Initial state for the user
const initialState: UserProps = {
  uid: '',
  first_name: '',
  last_name: '',
  email: '',
  image: '',
  isActive: false,
  isVerified: false,
  createdAt: null,
  updatedAt: null,
};

// Create the user slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Log in a user (sets their data)
    login: (state, action: PayloadAction<UserProps>) => {
      const {
        uid,
        first_name,
        last_name,
        email,
        image,
        isActive,
        isVerified,
        createdAt,
        updatedAt,
      } = action.payload;
      state.uid = uid;
      state.first_name = first_name;
      state.last_name = last_name;
      state.email = email;
      state.image = image;
      state.isActive = isActive;
      state.isVerified = isVerified;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
    // Log out a user (reset to initial state)
    logout: (state) => {
      state.uid = initialState.uid;
      state.first_name = initialState.first_name;
      state.last_name = initialState.last_name;
      state.email = initialState.email;
      state.image = initialState.image;
      state.isActive = initialState.isActive;
      state.isVerified = initialState.isVerified;
      state.createdAt = initialState.createdAt;
      state.updatedAt = initialState.updatedAt;
    },
    // Update user profile information
    updateProfile: (state, action: PayloadAction<Partial<UserProps>>) => {
      const { first_name, last_name, email, image } = action.payload;
      if (first_name) state.first_name = first_name;
      if (last_name) state.last_name = last_name;
      if (email) state.email = email;
      if (image) state.image = image;
      state.updatedAt = new Date().toISOString();
    },
    // Activate the user account
    activateUser: (state) => {
      state.isActive = true;
    },
    // Verify the user's email
    verifyUser: (state) => {
      state.isVerified = true;
    },
    // Deactivate the user account
    deactivateUser: (state) => {
      state.isActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  updateProfile,
  activateUser,
  verifyUser,
  deactivateUser,
} = userSlice.actions;

export default userSlice.reducer;
