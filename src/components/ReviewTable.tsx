import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { ColDef, DataGrid } from '@material-ui/data-grid'
import { RootState } from '../redux/index'

export const ReviewTable: FC<{}> = () => {
  const columns: ColDef[] = [
    { field: 'title', headerName: 'Title'},
    { field: 'message', headerName: 'Message' },
    { field: 'rating', headerName: 'Title'},
    { field: 'reviewer_name', headerName: 'Reviewer Name' },
    { field: 'reviewer_email', headerName: 'Reviewer Email' },
    { field: 'published', headerName: 'Published' },
    { field: 'verified', headerName: 'Verified' }
  ]

  const { reviews } = useSelector((state: RootState) => state.upload)

  return (
    <div style={{ height: 300, width: "100%", marginTop: 20 }}>
        <DataGrid rows={reviews} columns={columns} />
    </div>
  )
}