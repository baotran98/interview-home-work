import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentList: []
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action) => ({
      ...state,
      commentList: action.payload
    }),
    getComment() {}
  }
})

export const { getComment, setComment } = commentSlice.actions
export default commentSlice.reducer
