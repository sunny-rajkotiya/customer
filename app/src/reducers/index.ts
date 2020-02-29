import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
const rootReducer = combineReducers({
	customer:customerReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer