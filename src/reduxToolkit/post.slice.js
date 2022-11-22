import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postList: [],
  infoPost: {}
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action) => ({
      ...state,
      postList: action.payload
    }),
    getPost() {}
  }
})

export const { getPost, setPost } = postSlice.actions
export default postSlice.reducer
