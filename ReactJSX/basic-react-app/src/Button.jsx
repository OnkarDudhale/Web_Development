function handlingClick(){
    console.log('button clicked !');
}

export default function Button(){
    return (
        <>
        <button className="btn" onClick={handlingClick}>click me!</button>
        </>
    )
}