import NewDietForm from '../../components/NewDietForm/NewDietForm'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

export default function GetBmrForm ({ user }) {
  const [bmrWeight, setBmrWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [bmr, setBmr] = useState(null)

  const url = `https://gym-fit.p.rapidapi.com/calculator/bmr?gender=${sex}&height=${height}&weight=${bmrWeight}&age=${age}`
  const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		    'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
	    }
  }

  const getBmr = async () => {
    try {
      const response = await fetch(url, options)
      const result = await response.text()
      setBmr(result)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {
            bmr
              ? <NewDietForm user={user} bmr={bmr} />
              : <>
                <h1>Calculate BMR</h1>
                <Stack direction='row' spacing={2}>
                  <Box component='form' sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
                    <TextField id='outlined-number' name='bmrWeight' label='Weight' type='number' onChange={(e) => setBmrWeight(e.target.value)} />
                    <TextField id='outlined-number' name='height' label='Height' type='number' onChange={(e) => setHeight(e.target.value)} />
                    <TextField id='outlined-number' name='age' label='Age' type='number' onChange={(e) => setAge(e.target.value)} />
                    <TextField id='outlined-number' name='sex' label='Male or Female' type='string' onChange={(e) => setSex(e.target.value)} />
                    <Button variant='contained' onClick={() => getBmr()}>Get BMR</Button>
                  </Box>
                </Stack>
                </>
        }
    </>
  )
}
