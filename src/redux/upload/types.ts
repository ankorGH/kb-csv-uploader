import { Review, UploadFailedError } from '../../components/types'

export const UPLOAD_FAILED = 'UPLOAD_FAILED'
export const UPLOAD_SUCCESSFULL = 'UPLOAD_SUCCESSFULL'

interface UploadFailedAction {
  type: typeof UPLOAD_FAILED,
  payload: UploadFailedError
}

interface  UploadSuccessfullAction {
  type: typeof UPLOAD_SUCCESSFULL,
  payload: Review[]
}

export type UploadActionTypes = UploadFailedAction | UploadSuccessfullAction