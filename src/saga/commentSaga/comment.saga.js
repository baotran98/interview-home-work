import { call, put, takeLatest } from 'redux-saga/effects'
import { getComment, setComment } from '../../reduxToolkit/comment.slice'
import { commentService } from '../../services/commentService'

function* getCommentSaga(action) {
  try {
    const response = yield call(() => commentService.getComment())
    const result = response.data
    yield put(setComment(result))
  } catch (error) {
    console.log(error)
  }
}

function* trackingGetCommentSaga() {
  yield takeLatest(getComment.type, getCommentSaga)
}
export default trackingGetCommentSaga
