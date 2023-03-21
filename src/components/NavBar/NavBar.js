import { Link } from 'react-router-dom'

export default function NavBar ({ user }) {
  return (
    <nav>
      <Link to='/'>Home</Link>
        {
          user ?
            <Link to='/dashboard'>Dashboard</Link>
            : ''
        }
    </nav>
  )
}
