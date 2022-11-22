import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      userList: action.payload
    }),
    getUser() {}
  }
})

export const { getUser, setUser } = userSlice.actions
export default userSlice.reducer
