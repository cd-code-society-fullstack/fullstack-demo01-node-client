import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const WeatherWidget = () => {
    const[formatted, setFormatted] = useState("Not Set");
    const[description, setDescription] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const zipcode= data.get('zipcode');
        axios.get(`http://localhost:8081/weather?zipcode=${zipcode}`).then(res =>{
            
            const {weather} = res.data.data;
            const {locationData, weatherData} = weather;
            console.log(weather);
            setFormatted(locationData.formatted)
            setDescription(weatherData.description)
        })
    };
    
    return(
        <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardContent sx={{ flexGrow: 1 }}>

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <WbSunnyIcon />
          </Avatar>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="zipcode"
                    label="Zipcode"
                    name="zipcode"
                    autoComplete="zipcde"
                    autoFocus
                    />
                    
                   
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Submit
                    </Button>
                    
                </Box>
                <Typography gutterBottom variant="h5" component="h2" textAlign="center">
                    {formatted}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" textAlign="center">
                    {description}
                </Typography>
          </CardContent>

        </Card>
      </Grid>
    )
}

export default WeatherWidget;