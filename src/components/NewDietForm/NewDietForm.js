import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewDietForm ({ user, bmr }) {
  const navigate = useNavigate()

  const [duration, setDuration] = useState('')
  const [weight, setWeight] = useState('')
  const [bodyFat, setBodyFat] = useState('')

  const createDiet = async () => {
    try {
      await fetch('/api/diets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          duration,
          bmr,
          weight,
          bodyFat,
          userId: user._id
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Create Diet</h1>
      <h2>Calculated BMR: {bmr}</h2>
      <Stack direction='row' spacing={2}>
        <Box component='form' sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
          <TextField id='outlined-number' name='duration' label='Duration (Weeks)' type='number' onChange={(e) => setDuration(e.target.value)} />
          <TextField id='outlined-number' name='weight' label='Weight' type='number' onChange={(e) => setWeight(e.target.value)} />
          <TextField id='outlined-number' name='bodyFat' label='Body Fat %' type='number' onChange={(e) => setBodyFat(e.target.value)} />
          <Button
            variant='contained' type='submit'
            onClick={() => {
              createDiet()
              navigate('/dashboard')
            }}
          >
            Create
          </Button>
        </Box>
      </Stack>
    </>
  )
}
