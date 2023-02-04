import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import Loading from '../Loading/Loading'

function AdminHome() {

    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [user, navigate])

    function handleLogout(){
      dispatch(logout())
      navigate('/login')
    }

    if(isLoading){
      return <Loading />
    }

  return (
    <div className='adminHome'>
        <button onClick={handleLogout} >logout</button>
    </div>
  )
}

export default AdminHome