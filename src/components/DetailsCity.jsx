import React from 'react'
import cityGroupCards from "../utils/data";
import { useParams } from 'react-router-dom';
export const DetailsCity = () => {
  const params = useParams()
  return (
    <div className='min-h-[78.5vh]  '> {params.id} </div>
  )
}
