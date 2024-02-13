import NewDietForm from '../../components/NewDietForm/NewDietForm'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function GetBmrForm ({ user, diets }) {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [bmr, setBmr] = useState(null)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const url = `https://gym-fit.p.rapidapi.com/calculator/bmr?gender=${sex}&height=${height}&weight=${weight}&age=${age}`
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
    } catch (error) {
      console.error(error)
    }
  }

  const checkDiets = (arr) => {
    let counter = 0;
    arr.forEach(() => {
      if (diets.completed === false) counter++;
    })
    if (counter === 1 || counter === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkDiets(diets))

  return (
    <>
      {
            bmr
              ? <NewDietForm user={user} bmr={bmr} weight={weight} />
              : <>
                <h1>Calculate BMR to Create A New Diet</h1>
                <Stack direction='row' spacing={2}>
                  <Box component='form' sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
                    <TextField id='outlined-number' name='weight' label='Weight (kg)' type='number' onChange={(e) => setWeight(e.target.value)} />
                    <TextField id='outlined-number' name='height' label='Height (cm)' type='number' onChange={(e) => setHeight(e.target.value)} />
                    <TextField id='outlined-number' name='age' label='Age' type='number' onChange={(e) => setAge(e.target.value)} />
                    <TextField id='outlined-number' name='sex' label='Male or Female' type='string' onChange={(e) => setSex(e.target.value)} />
                    <Button variant='contained' onClick={() => !checkDiets(diets) ? getBmr() : handleOpen()}>Get BMR</Button>
                  </Box>
                </Stack>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        You already have an active diet!
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Only one diet may be active at a time. If you would like to start a new diet, please complete or delete the current active diet.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
                </>
        }
    </>
  )
}
