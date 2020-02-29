import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import {RootState} from '../reducers'

export type AppThunkType = ThunkAction<void,RootState,unknown,Action<string>>