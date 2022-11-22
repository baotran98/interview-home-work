import { call, put, takeLatest } from 'redux-saga/effects'
import { getPost, setPost } from '../../reduxToolkit/post.slice'
import { postService } from '../../services/postService'

function* getPostSaga(action) {
  try {
    const response = yield call(() => postService.getList())
    const result = response.data
    yield put(setPost(result))
  } catch (error) {
    console.log(error)
  }
}

function* trackingGetPostSaga() {
  yield takeLatest(getPost.type, getPostSaga)
}

export default trackingGetPostSaga
