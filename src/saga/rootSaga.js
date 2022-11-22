import { all, fork } from 'redux-saga/effects'
import trackingGetCommentSaga from './commentSaga/comment.saga'
import trackingGetPostSaga from './postSaga/post.saga'
import trackingGetUserSaga from './userSaga/user.saga'

export default function* rootSaga() {
  yield all([fork(trackingGetPostSaga), fork(trackingGetCommentSaga), fork(trackingGetUserSaga)])
}
