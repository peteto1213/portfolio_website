import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AdminHome() {

    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [])

  return (
    <div className='adminHome'>
        AdminHome
    </div>
  )
}

export default AdminHome