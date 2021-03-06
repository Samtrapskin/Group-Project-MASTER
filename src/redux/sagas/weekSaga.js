import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* weekSaga() {
	yield takeEvery('UPDATE_WEEK_SAGA', putWeekSaga);
}

function* putWeekSaga(action) {
    console.log('this is putWeekSaga', action.payload);
    
	try {
        yield call(axios.put, `/api/instructorschedule/weeks/update/${action.payload.weekId}`, action.payload);
		yield put({
            type: 'FETCH_PROGRAM_WEEKS',
            payload: action.payload,
		});
	} catch (error) {
		console.log('get studentList error: ', error);
	}
}

export default weekSaga;