import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'

export default function NavBar ({ user, setUser }) {
  const navigate = useNavigate()

  function handleLogOut () {
    navigate('/')
    logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      {
          user
            ? <>
              <Link to='/dashboard'>Dashboard</Link>
              <button onClick={handleLogOut}>Log Out</button>
              </>
            : <Link to='/login'>Login / SignUp</Link>
          }
    </nav>
  )
}
