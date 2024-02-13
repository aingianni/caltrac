import GetBmrForm from '../../components/GetBmrForm/GetBmrForm'
import { useState, useEffect } from 'react'

export default function DashBoardPage ({ user, setUser }) {
  const [diets, setDiets] = useState([])

  const getDiets = async () => {
    try {
      const response = await fetch('/api/diets')
      const data = await response.json()
      setDiets(data.filter(diet => diet.userId === user._id))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDiets()
  }, [user])

  return (
    <>
      <h1>This is the User Dashboard</h1>
      <div>
        {
          !diets.completed
            ? <ul>
                {
                  diets.map((diet) => {
                    return (
                      <li key={diet._id}>
                        {
                          diet.duration
                        }
                      </li>
                    )
                  })
                }
              </ul>
            : <ul>
                {
                  diets.map((diet) => {
                    return (
                      <li key={diet._id}>
                        {
                          diet.duration
                        }
                      </li>
                    )
                  })
                }
              </ul>
          }
      </div>
      <GetBmrForm user={user} setUser={setUser} diets={diets} />
    </>
  )
}
