import { UploadActionTypes, UPLOAD_FAILED, UPLOAD_SUCCESSFULL } from './types'

const initalState = {
  reviews: [],
  error: null,
}

export const uploadReducer = (state = initalState, action : UploadActionTypes) => {
  switch(action.type) {
    case UPLOAD_FAILED:
      return {
        error: action.payload,
        reviews: []
      } 
    case UPLOAD_SUCCESSFULL:
      return {
        error: null,
        reviews: action.payload
      }
    default: 
      return { ...state };
  }
}