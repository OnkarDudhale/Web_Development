import './DetailBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function DetailBox({ weatherInfo }) {
    if (!weatherInfo) return null;
    console.log(weatherInfo);
    const images = {
        hot: 'https://plus.unsplash.com/premium_photo-1732739291232-6408d01b8b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
        , rainy: 'https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ='
        , cold: 'https://images.unsplash.com/photo-1644716276377-59d4908d3729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww'
    };
    return (
        <Card sx={{ maxWidth: 345 }} className='mainCard'>
            <CardMedia
                sx={{ height: 200 }}
                image={weatherInfo.humidity >= 80 ? images.rainy :
                    weatherInfo.temp <= 15 ? images.cold :
                        weatherInfo.temp >= 21 ? images.hot : images.cold}
                title={weatherInfo.humidity >= 80 ? 'Rainy weather' :
                    weatherInfo.temp <= 15 ? 'Cold weather' :
                        weatherInfo.temp >= 21 ? 'Hot weather' : 'Cold weather'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {weatherInfo.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                    <p>Tempreture : {weatherInfo.temp}&deg;C</p>
                    <p>Humidity : {weatherInfo.humidity}&deg;C</p>
                    <p>MAX-Tempreture : {weatherInfo.temp_max}&deg;C</p>
                    <p>MIN-Tempreture : {weatherInfo.temp_min}&deg;C</p>
                    <p>Wind-Speed : {weatherInfo.speed}</p>
                    <p>The weather can be described as {weatherInfo.description} and feels like {weatherInfo.feels_like}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
    );
}