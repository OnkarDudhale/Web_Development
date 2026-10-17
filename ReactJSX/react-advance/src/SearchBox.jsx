import './SearchBox.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
    let [location, setLocation] = useState('');
    let [alert, setAlert] = useState(false);

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = import.meta.env.VITE_API_KEY;

    const handlingChange = (event) => {
        setLocation(event.target.value);
    }
    const gettingWeatherInfo = async () => {
        const URL = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        try {
            let response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            if (data.cod !== 200) {
                setAlert(true);
                return;
            }
            setAlert(false);
            updateWeatherInfo({ ...data.main, name: data.name, ...data.wind, ...data.weather[0] });
        }
        catch (err) {
            console.log('Error fetching weather data', err);
            setAlert(true);
        }
    }

    const handlingSubmit = (event) => {
        event.preventDefault();
        gettingWeatherInfo();
        setLocation('');
    }
    return (
        <>
            <h2>Weather Information Search</h2>
            <form onSubmit={handlingSubmit}>
                <TextField onChange={handlingChange} id="standard-basic" label="Location" variant="standard" value={location} required />
                <Button variant="outlined" type='submit'>Search</Button>
            </form>
            {alert && <Alert className='error' severity="error">Location not found. Please try another city.</Alert>}

        </>
    )
}