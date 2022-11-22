import { call, put, takeLatest } from 'redux-saga/effects'
import { getUser, setUser } from '../../reduxToolkit/user.slice'
import { userService } from '../../services/userService'

function* getUserSaga(action) {
  try {
    const response = yield call(() => userService.getUser())
    const result = response.data
    yield put(setUser(result))
  } catch (error) {
    console.log(error)
  }
}

function* trackingGetUserSaga() {
  yield takeLatest(getUser.type, getUserSaga)
}
export default trackingGetUserSaga
