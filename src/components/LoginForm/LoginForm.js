import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function LoginForm ({ setUser }) {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='email' name='email' value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <button type='submit'>LOG IN</button>
        </form>
      </div>
      <h1 className='error-message'>&nbsp;{error}</h1>
    </div>
  )
}
