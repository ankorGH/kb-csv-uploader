import { combineReducers } from 'redux'
import { uploadReducer } from './upload/reducer'

export const rootReducer = combineReducers({ upload: uploadReducer })

export type RootState = ReturnType<typeof rootReducer>