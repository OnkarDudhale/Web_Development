import { useState } from "react";
import { getTicketNumber } from './lotteryTicket.js';
import Ticket from "./Ticket.jsx";
import './Lottery.css'

export default function Lottery({ size = 3, winningCondition }) {
    const [ticketNumber, setTicketNumber] = useState(() => Array(size).fill(0));
    const isWinning = winningCondition(ticketNumber);
    const getNewTicket = () => {
        setTicketNumber(getTicketNumber(size));
    }
    return (
        <div className="lottery">
            <h1>LOTTERY</h1>
            {isWinning && <p className="message">🎉 Congratulations You won the Lottery ! 🎉</p>}
            <Ticket ticket={ticketNumber} />
            <button onClick={getNewTicket} className="newTicket">Get new Ticket</button>
        </div>
    );
}

