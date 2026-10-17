import DetailBox from "./DetailBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weather, setWeather] = useState(null);

    const updateWeatherInfo = (info) => {
        setWeather(info);
    }
    return (<>
        <SearchBox updateWeatherInfo={updateWeatherInfo} />
        <DetailBox weatherInfo={weather} />
    </>)
}