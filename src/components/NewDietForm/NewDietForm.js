import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function NewDietForm () {
    return (
        <Stack direction="row" spacing={2}>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-number" label="Duration (Weeks)" type="number" InputLabelProps={{shrink: true}}/>
                <TextField id="outlined-number" label="BMR" type="number" InputLabelProps={{shrink: true}}/>
                <TextField id="outlined-number" label="Weight" type="number" InputLabelProps={{shrink: true}}/>
                <TextField id="outlined-number" label="Body Fat %" type="number" InputLabelProps={{shrink: true}}/>
                <Button variant="contained">Create</Button>
            </Box>
        </Stack>
    )
}