import { useEffect, useState } from "react";
import './FetchAPI.css';
export default function FetchAPI() {

    const [randomJoke, setRandomJoke] = useState(null);
    const url = 'https://official-joke-api.appspot.com/random_joke';

    const handlingRandomJokes = async () => {
        let response = await fetch(url);
        let joke = await response.json();
        setRandomJoke(joke);
    }
    useEffect(() => {
        handlingRandomJokes();
    }, []);
    return (
        <div className="joke">
            <h3>Joke</h3>
            {randomJoke &&
                <>
                    <div className="jokeSetup">{randomJoke.setup}</div>
                    <div className="jokePunchline">Punchline : {randomJoke.punchline}</div>
                </>
            }
            <div className="button">
                <button onClick={handlingRandomJokes}>Get</button>
            </div>
        </div>
    )
}