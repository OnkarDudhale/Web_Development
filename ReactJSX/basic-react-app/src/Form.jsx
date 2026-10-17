function handlingSubmit(event) {
    event.preventDefault();
    console.log('form submited !');
    console.log(event);
}
export default function Form() {
    return (
        <form action="#" onSubmit={handlingSubmit}>
            <input type="text" placeholder="write something" />
            <button type="submit">submit</button>
        </form>
    )
}