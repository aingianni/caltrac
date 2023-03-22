import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import DashBoardPage from '../DashBoardPage/DashBoardPage'
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
  }, [])

  return (
    <main className='App'>
      <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<AuthPage setUser={setUser} />} />
          <Route path='/dashboard' element={<DashBoardPage />} />
        </Routes>
    </main>
  )
}

export default App
