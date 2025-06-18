import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Enter City",
        feelsLike: 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "Clear",
    });   

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div className="WeatherApp" style={{ textAlign: 'center'}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}