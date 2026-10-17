export default function TicketNumber({ number }) {
    const style = {
        border: "1px solid rgba(255, 255, 81, 1)",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
    };

    return (
        <span style={style}>{number}</span>
    )
}