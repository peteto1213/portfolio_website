import React from 'react'
import { useState } from 'react'
import { FaSignInAlt, FaUserAlt, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'
import logo from '../../resources/cmdb.png'

function Login() {
    const navigate = useNavigate();

  const[form, setForm] = useState({
    username: '',
    password: ''
  })

  const { username, password } = form

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)

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

  function navigateHome(){
    navigate('/')
  }

  if(isLoading){
    return <Loading />
  }

  return (
    <div className='login'>
      <button onClick={navigateHome} className='btn'>Back to webpage</button>
      <div className="heading">
        <FaSignInAlt />
        <h3>Login to explore the materials</h3>
      </div>

      <div className="form-container">
        <img src={logo} alt="websiteLogo" />

        <form onSubmit={handleLogin}>
          <div className="input-field">
            <h3>Username</h3>
            <div className="input-container">
              <FaUserAlt className='icon' />
              <input 
                type="text"
                placeholder='Corp ID'
                name='username'
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-field">
            <h3>Password</h3>
            <div className="input-container">
              <FaLock className='icon' />
              <input 
                type="password"
                placeholder='Password'
                name='password'
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className='btn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login