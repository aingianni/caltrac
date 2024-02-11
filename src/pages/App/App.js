import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import DashBoardPage from '../DashBoardPage/DashBoardPage'
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar'

function App () {
  const [user, setUser] = useState(getUser())

  useEffect(() => {
  }, [user])

  return (
    <main className='App'>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<AuthPage setUser={setUser} />} />
        {
            user
              ? <Route path='/dashboard' element={<DashBoardPage user={user} setUser={setUser} />} />
              : ''
          }

      </Routes>
    </main>
  )
}

export default App
