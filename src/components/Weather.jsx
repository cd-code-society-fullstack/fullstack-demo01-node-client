import {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = () =>{
    const[formatted, setFormatted] = useState("Not Set");
    const[description, setDescription] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8081/weather?zipcode=19963").then(res =>{
            
            const {weather} = res.data.data;
            const {locationData, weatherData} = weather;
            console.log(weather);
            setFormatted(locationData.formatted)
            setDescription(weatherData.description)
        })
    },[])
    return(
        <>
        <h1>Weather</h1>
            <h2>{formatted}</h2>
            <h2>{description}</h2>
        </>
    )
}

export default Weather;