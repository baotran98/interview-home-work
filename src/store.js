import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import postSlice from './reduxToolkit/post.slice'
import rootSaga from './saga/rootSaga'
import commentSlice from './reduxToolkit/comment.slice'
import userSlice from './reduxToolkit/user.slice'

const reducer = combineReducers({
  post: postSlice,
  comment: commentSlice,
  user: userSlice
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
