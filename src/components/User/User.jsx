import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userId} = useParams()
  return (
    <div className='text-white bg-gray-600 p-4 text-center text-3xl'>
        User : {userId} </div>
  )
}

export default User