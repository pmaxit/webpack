import {combineReducers} from 'redux';
import navigator from './navigator'
import chat from './ChatReducer'

const rootReducers = combineReducers({
	navigator,
	chat
})

export default rootReducers;