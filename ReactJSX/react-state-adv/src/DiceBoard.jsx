import { useState } from "react"
export default function DiceBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, orange: 0, green: 0 });
    const [names, setNames] = useState([]);
    const arr = ['aman', 'vishal', 'manoj'];
    const [limit, setLimit] = useState(0);
    function countBlue() {
        setMoves((blueCount) => {
            //need to spread(...) because changes in value of object does not change object address
            //so we need spread that return object
            return ({ ...blueCount, blue: blueCount.blue + 1 });
        })
    }
    function countRed() {
        setMoves((redCount) => {
            return ({ ...redCount, red: redCount.red + 1 });
        })
    }
    function countOrange() {
        setMoves((orangeCount) => {
            return ({ ...orangeCount, orange: orangeCount.orange + 1 });
        })
    }
    function countGreen() {
        setMoves((greenCount) => {
            return ({ ...greenCount, green: greenCount.green + 1 });
        })
    }
    function updateNames() {
        if (limit < 3) {
            setNames((name) => {
                return ([...name, arr[Math.floor(Math.random() * arr.length)] + ' '])
            });
            setLimit((prevLimit) => prevLimit + 1);
        }
    }
    return (
        <div className="board">
            <p>blue={moves.blue}</p>
            <button onClick={countBlue} style={{ backgroundColor: 'blue' }}>+1</button>
            <p>red={moves.red}</p>
            <button onClick={countRed} style={{ backgroundColor: 'red' }}>+1</button>
            <p>orange={moves.orange}</p>
            <button onClick={countOrange} style={{ backgroundColor: 'orange' }}>+1</button>
            <p>green={moves.green}</p>
            <button onClick={countGreen} style={{ backgroundColor: 'green' }}>+1</button>
            <p>names={names}</p>
            <button onClick={updateNames}>name</button>
        </div>
    )
}