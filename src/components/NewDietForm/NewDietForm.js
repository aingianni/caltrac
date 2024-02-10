import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

export default function NewDietForm ({ user, setUser }) {
    const navigate = useNavigate();

    const [duration, setDuration] = useState("");
    const [bmr, setBmr] = useState("");
    const [weight, setWeight] = useState("");
    const [bodyFat, setBodyFat] = useState("");

    const createDiet = async () => {
        try {
            await fetch('/api/diets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    duration: duration,
                    bmr: bmr,
                    weight: weight,
                    bodyFat: bodyFat,
                    userId: user._id
                })
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Stack direction="row" spacing={2}>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField id="outlined-number" name="duration" label="Duration (Weeks)" type="number" onChange={(e) => setDuration(e.target.value)}/>
                <TextField id="outlined-number" name="bmr" label="BMR" type="number" onChange={(e) => setBmr(e.target.value)}/>
                <TextField id="outlined-number" name="weight" label="Weight" type="number" onChange={(e) => setWeight(e.target.value)}/>
                <TextField id="outlined-number" name="bodyFat" label="Body Fat %" type="number" onChange={(e) => setBodyFat(e.target.value)}/>
                <Button variant="contained" type="submit" 
                    onClick={() => {
                        createDiet()
                        setUser(getUser())
                        navigate('/')
                    }}>
                    Create
                </Button>
            </Box>
        </Stack>
    )
}