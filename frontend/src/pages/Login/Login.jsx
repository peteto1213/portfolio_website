import React from 'react'
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'

function Login() {
    const navigate = useNavigate();

  const[form, setForm] = useState({
    username: '',
    password: ''
  })

  const {username, password} = form

  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

  const handleChange = (event) => {
    const{ name, value } = event.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = (event) => {
    event.preventDefault()

    const userData = {
      username: username,
      password: password
    }

    dispatch(login(userData))
  }

  useEffect(() => {
    if(isError){
      alert(message)
    }
    if(isSuccess || user){
      navigate('/adminHome')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  if(isLoading){
    return <Loading />
  }

  return (
    <div className='login'>
      <div className="heading">
        <FaSignInAlt />
        <h3>Login to explore the materials</h3>
      </div>

      <div className="form-container">
        <img src="" alt="websiteLogo" />

        <form onSubmit={handleLogin}>
          <div className="input-field">
            <h3>username</h3>
            <input 
              type="text"
              placeholder='admin'
              name='username'
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <h3>password</h3>
            <input 
              type="password"
              placeholder='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className='btn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login