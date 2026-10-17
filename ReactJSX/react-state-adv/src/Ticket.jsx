import TicketNumber from "./TicketNumber"
import './Ticket.css';
export default function Ticket({ ticket }) {
    return (
        <div className="ticket">
            <h2>TICKET</h2>
            <div className="ticketNumber">
                {ticket.map((num, idx) => (
                    <TicketNumber number={num} key={idx} />
                ))}
            </div>
        </div>
    )
}