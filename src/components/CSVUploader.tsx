import React, { useState } from 'react';
import Joi from 'joi';
import CSVReader, {IFileInfo} from 'react-csv-reader'
import { useDispatch } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import { Review, ValidatedCSVResult } from './types';
import { UPLOAD_SUCCESSFULL, UPLOAD_FAILED } from '../redux/upload/types';

const schema = Joi.object<Review>({
  title: Joi.string(),
  message: Joi.string().required(),
  rating: Joi.number().required(),
  reviewer_name: Joi.string(),
  reviewer_email: Joi.string().email({tlds: false}).required(),
  published: Joi.boolean(),
  verified: Joi.boolean()
})


export const CSVUploader = () => {
  const [[isAlertOpened, errorMessage], setAlert] = useState([false, ""])

  const validateCSV = (data: Review[]): ValidatedCSVResult => {
    const validatedData = [];
    for(let i = 0; i < data.length; i++) {
      const {error} = schema.validate(data[i])

      if(error) {
        return {
          error: `${error.message} on line ${i + 1}`,
          validatedData: null
        }
      }

      validatedData.push({...data[i], id: i })
    }

    return { error: null, validatedData }
  }

  const dispatch = useDispatch()

  return (
    <>
      <Snackbar 
        open={isAlertOpened}  
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        message={errorMessage}
      >
          <Alert onClose={() => setAlert([false, ""])} severity="error">
            {errorMessage}
          </Alert>
      </Snackbar>

      <CSVReader
        label="📁  Upload"
        cssClass="upload-container"
        cssLabelClass="upload-label"
        cssInputClass="upload-input"
        onFileLoaded={(data: Review[], fileInfo: IFileInfo) => {
          const {error, validatedData} = validateCSV(data)
          
          if(error) {
            setAlert([true, error])
            return dispatch({ type: UPLOAD_FAILED, payload: error})
          }
          
          dispatch({ type: UPLOAD_SUCCESSFULL, payload: validatedData})
        }}
        onError={() => console.log('handle errors')}
        parserOptions={{
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          transformHeader: header =>
          header
          .toLowerCase()
          .replace(/\W/g, '_')
        }}
        inputId="csvFile"
        inputStyle={{color: 'red'}}
        />
    </>
  )
} 